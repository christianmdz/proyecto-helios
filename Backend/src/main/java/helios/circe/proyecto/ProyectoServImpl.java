package helios.circe.proyecto;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.Campo;
import helios.circe.navegante.NaveganteService;
import helios.circe.navenproy.NaveganteEnProyectoService;
import helios.circe.navenproy.dto.NaveganteEnProyectoAltaDto;
import helios.circe.proyecto.dto.ProyectoAuthDto;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoPublicoDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProyectoServImpl implements ProyectoService{

    private final JwtService jwtService;
    private final DtoMapper dtoMapper;
    private final ProyectoRepository proyectoRepository;
    private final NaveganteService naveganteService;
    private final NaveganteEnProyectoService naveganteEnProyectoService;

    @Override
    public List<ProyectoBaseDto> listaProyectos(String token) {

        String rol = jwtService.getRolFromToken(token);
        
        List<Proyecto> proyectos = new ArrayList<>();
        List<ProyectoBaseDto> listaProyectos = new ArrayList<>();

        switch (rol) {
            case "COMANDANTE":
                proyectos = buscarTodos();
                mapearListaProyectosADto(proyectos, listaProyectos, ProyectoAuthDto.class);
                break;
            case "MANDO":
            case "TRIPULANTE":
                String campo = jwtService.getCampoFromToken(token);
                proyectos = buscarPorCampo(campo);
                mapearListaProyectosADto(proyectos, listaProyectos, ProyectoAuthDto.class);
                break;
            case "COLONO":
                proyectos = buscarTodos();
                mapearListaProyectosADto(proyectos, listaProyectos, ProyectoPublicoDto.class);
                break;
            default:
                throw new SecurityException();
        }
        
        return listaProyectos;
    }

    private List<Proyecto> buscarTodos(){
        return proyectoRepository.findAll();
    }

    
    private List<Proyecto> buscarPorCampo(String campo) {
        
        Campo enumCampo = Campo.fromString(campo);
        return proyectoRepository.findByField(enumCampo);
    }
    
    private void mapearListaProyectosADto(List<Proyecto> listaProyectosOrigen, List<ProyectoBaseDto> listaProyectosDestino, Class<? extends ProyectoBaseDto> dtoClass){

        for(Proyecto proyecto : listaProyectosOrigen){
            listaProyectosDestino.add(dtoMapper.mapFromProyecto(proyecto, dtoClass));
        }
    }

    @Override
    public ProyectoBaseDto detalleProyecto(String campo, int idProyecto) {
        
        Proyecto proyecto = buscarPorId(idProyecto);
    
        if (proyecto == null) {
            throw new NoSuchElementException();
        }
        
        if (!autorizacionPorCampo(campo, proyecto.getCampo().name())) {
            throw new SecurityException();
        }

        ProyectoAuthDto proyectoDto = dtoMapper.mapFromProyecto(proyecto, ProyectoAuthDto.class);

        
        return proyectoDto;
    }

    @Override
    public Proyecto buscarPorId(int idProyecto){
        return proyectoRepository.findById(idProyecto).orElseThrow();
    }

    @Override
    public boolean crearProyecto(ProyectoRequestDto proyectoDto) {
        try {
            // Alta proyecto
            Proyecto proyecto = dtoMapper.mapFromRequestProyectoDto(proyectoDto, naveganteService);
            proyecto = altaProyecto(proyecto);
            // Alta director proyecto
            NaveganteEnProyectoAltaDto naveganteDto = new NaveganteEnProyectoAltaDto();
            naveganteDto.setIdNavegante(proyecto.getDirector().getId());
            naveganteDto.setIdProyecto(proyecto.getId());
            naveganteDto.setFechaIncorporacion(proyecto.getFechaInicio());
            naveganteDto.setDiasAsignados(365);
            naveganteEnProyectoService.altaNaveganteEnProyecto(naveganteDto, this);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private Proyecto altaProyecto(Proyecto proyecto){
        return proyectoRepository.save(proyecto);
    }

    @Override
    public boolean modificarProyecto(String campo, ProyectoModificarDto proyectoDto) {
        if(!autorizacionPorCampo(campo, proyectoDto.getId())) {throw new SecurityException();}
        try {
            Proyecto proyecto = dtoMapper.mapFromModificarProyectoDto(proyectoDto, naveganteService);
            if(buscarPorId(proyecto.getId()) != null) {
                proyectoRepository.save(proyecto);
                return true;
            }
            else {throw new NoSuchElementException();}
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean cancelarProyecto(int idProyecto) {
        try {
            Proyecto proyecto = proyectoRepository.findById(idProyecto).orElseThrow();
            if(proyecto != null){
                proyecto.setEtapa("cancelado");
                proyectoRepository.save(proyecto);
                return true;
            }
            else {throw new NoSuchElementException();}
        } catch (Exception e) {
            e.printStackTrace(); // TODO: solo para desarrollo : captura en controlador??
            return false;
        }
    }

    @Override
    public boolean autorizacionPorCampo(String campo, int idProyecto){
        Proyecto proyecto = buscarPorId(idProyecto);
        if(campo.equals("LIDER") || campo.equals(proyecto.getCampo().name())) {return true;}
        else {return false;} 
    }

    private boolean autorizacionPorCampo(String campo, String campoProyecto){
        return (campo.equals(campoProyecto) || campo.equals("LIDER"));
    }

    @Override
    public boolean existeProyecto(int idProyecto) {
        return proyectoRepository.existsById(idProyecto);
    }

    @Override
    public String campoDeProyecto(int idProyecto) {
        Campo campo = proyectoRepository.getProjectField(idProyecto);
        return campo.name();
    }
}

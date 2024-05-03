package helios.circe.proyecto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.Campo;
import helios.circe.navegante.NaveganteService;
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

    @Override
    public List<ProyectoBaseDto> buscarTodos(String token) {

        String rol = jwtService.getRolFromToken(token);
        
        List<Proyecto> proyectos = new ArrayList<>();
        List<ProyectoBaseDto> listaProyectos = new ArrayList<>();

        switch (rol) {
            case "COMANDANTE":
                proyectos = proyectoRepository.findAll();
                mapearListaProyectosADto(proyectos, listaProyectos, ProyectoAuthDto.class);
                break;
            case "MANDO":
            case "TRIPULANTE":
                String campo = jwtService.getCampoFromToken(token);
                proyectos = buscarPorCampo(campo);
                mapearListaProyectosADto(proyectos, listaProyectos, ProyectoAuthDto.class);
                break;
            case "COLONO":
                proyectos = proyectoRepository.findAll();
                mapearListaProyectosADto(proyectos, listaProyectos, ProyectoPublicoDto.class);
                break;
        }
        
        return listaProyectos;
    }

    private void mapearListaProyectosADto(List<Proyecto> listaProyectosOrigen, List<ProyectoBaseDto> listaProyectosDestino, Class<? extends ProyectoBaseDto> dtoClass){

        for(Proyecto proyecto : listaProyectosOrigen){
            listaProyectosDestino.add(dtoMapper.mapFromProyecto(proyecto, dtoClass));
        }
    }

    private List<Proyecto> buscarPorCampo(String campo) {
        
        Campo enumCampo = Campo.fromString(campo);
        return proyectoRepository.findByField(enumCampo);
    }

    @Override
    public ProyectoBaseDto buscarPorId(int idProyecto) {

        Proyecto proyecto = proyectoRepository.findById(idProyecto).orElseThrow();
        ProyectoAuthDto proyectoDto = dtoMapper.mapFromProyecto(proyecto, ProyectoAuthDto.class);

        return proyectoDto;
    }

    @Override
    public Proyecto crearProyecto(ProyectoRequestDto proyectoDto) {
        try {
            Proyecto proyecto = dtoMapper.mapFromRequestProyectoDto(proyectoDto, naveganteService);
            return proyectoRepository.save(proyecto);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public Proyecto modificarProyecto(ProyectoModificarDto proyectoDto) {
        try {
            Proyecto proyecto = dtoMapper.mapFromModificarProyectoDto(proyectoDto, naveganteService);
            if(buscarPorId(proyecto.getId()) != null) {return proyectoRepository.save(proyecto);}
            else {return null;}
        } catch (Exception e) {
            System.out.println(e);
            return null;
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
            else{
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }
}

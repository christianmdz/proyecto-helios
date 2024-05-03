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
        
        List<Proyecto> proyectos = proyectoRepository.findAll();
        List<ProyectoBaseDto> listaProyectos = new ArrayList<>();

        switch (rol) {
            case "COMANDANTE":
                listaProyectos = generarListaProyectosAuthDto(proyectos);
                break;
            case "MANDO":
            case "TRIPULANTE":
                String campo = jwtService.getCampoFromToken(token);
                listaProyectos = buscarPorCampo(campo);
                break;
            case "COLONO":
                listaProyectos = generarListaProyectosPublicoDto(proyectos);
                break;
        }
        return listaProyectos;
    }

    private List<ProyectoBaseDto> buscarPorCampo(String campo) {
        
        Campo enumCampo = Campo.fromString(campo);
        List<Proyecto> proyectos =  proyectoRepository.findByField(enumCampo);
        return generarListaProyectosAuthDto(proyectos);
    }
    
    private List<ProyectoBaseDto> generarListaProyectosAuthDto(List<Proyecto> proyectos){

        List<ProyectoBaseDto> proyectosDto = new ArrayList<>();

        for (Proyecto proyecto : proyectos) {
            proyectosDto.add(dtoMapper.mapFromProyecto(proyecto, ProyectoAuthDto.class));
        }

        return proyectosDto;
    }

    private List<ProyectoBaseDto> generarListaProyectosPublicoDto(List<Proyecto> proyectos) {

        List<ProyectoBaseDto> proyectosDto = new ArrayList<>();

        for(Proyecto proyecto : proyectos){
            proyectosDto.add(dtoMapper.mapFromProyecto(proyecto, ProyectoPublicoDto.class));
        }

        return proyectosDto;
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
            Proyecto proyecto = dtoMapper.mapFromRequestDto(proyectoDto, naveganteService);
            proyecto.setDirector(naveganteService.buscarPorUsername(proyectoDto.getDirector()));
            return proyectoRepository.save(proyecto);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public Proyecto modificarProyecto(Proyecto proyecto) {
        try {
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

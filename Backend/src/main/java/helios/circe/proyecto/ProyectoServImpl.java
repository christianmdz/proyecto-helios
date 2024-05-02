package helios.circe.proyecto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.navegante.Campo;
import helios.circe.proyecto.dto.ProyectoAuthDto;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProyectoServImpl implements ProyectoService{

    private final ProyectoRepository proyectoRepository;

    @Override
    public List<ProyectoBaseDto> buscarTodos() {
        
        List<Proyecto> proyectos = proyectoRepository.findAll();
        return generarListaProyectosAuthDto(proyectos);
    }

    @Override
    public Proyecto buscarPorId(int idProyecto) {
        return proyectoRepository.findById(idProyecto).orElseThrow();
    }

    @Override
    public List<ProyectoBaseDto> buscarPorCampo(String campo) {
        
        Campo enumCampo = Campo.fromString(campo);
        List<Proyecto> proyectos =  proyectoRepository.findByField(enumCampo);
        return generarListaProyectosAuthDto(proyectos);
    }

    @Override
    public List<ProyectoBaseDto> buscarPorDirector(String director) {
        // List<Proyecto> proyectos = proyectoRepository.findByDirector(director);
        // return generarListaProyectosAuthDto(proyectos);
        return null;
    }

    @Override
    public List<ProyectoBaseDto> buscatTodosPublico() {
        return null;
    }

    private ProyectoAuthDto fromProyectoToProyectoAuthDto(Proyecto proyecto){

        ProyectoAuthDto proyectoDto = new ProyectoAuthDto();
        proyectoDto.setId(proyecto.getId());
        proyectoDto.setNombre(proyecto.getNombre());
        proyectoDto.setCampo(proyecto.getCampo().name());
        proyectoDto.setDirector(proyecto.getDirector().getNombre());
        proyectoDto.setDirectorEmail(proyecto.getDirector().getEmail());
        proyectoDto.setDescripcion(proyecto.getDescripcion());
        proyectoDto.setFechaInicio(proyecto.getFechaInicio());
        proyectoDto.setFechaFin(proyecto.getFechaFin());
        proyectoDto.setEtapa(proyecto.getEtapa());

        return proyectoDto;
    }
    
    private List<ProyectoBaseDto> generarListaProyectosAuthDto(List<Proyecto> proyectos){
        List<ProyectoBaseDto> proyectosDto = new ArrayList<>();

        for (Proyecto proyecto : proyectos) {
            proyectosDto.add(fromProyectoToProyectoAuthDto(proyecto));
        }

        return proyectosDto;
    }
}

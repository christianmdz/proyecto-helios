package helios.circe.proyecto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.navegante.Campo;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProyectoServImpl implements ProyectoService{

    private final ProyectoRepository proyectoRepository;

    @Override
    public List<ProyectoInterface> buscarTodos() {
        
        List<Proyecto> proyectos = proyectoRepository.findAll();
        return generarListaProyectosAuthDto(proyectos);
    }

    @Override
    public Proyecto buscarPorId(int idProyecto) {
        return proyectoRepository.findById(idProyecto).orElseThrow();
    }

    @Override
    public List<ProyectoInterface> buscarPorCampo(String campo) {
        
        Campo enumCampo = Campo.fromString(campo);
        List<Proyecto> proyectos =  proyectoRepository.findByField(enumCampo);
        return generarListaProyectosAuthDto(proyectos);
    }

    @Override
    public List<ProyectoInterface> buscarPorDirector(String director) {
        List<Proyecto> proyectos = proyectoRepository.findByDirector(director);
        return generarListaProyectosAuthDto(proyectos);
    }

    @Override
    public List<ProyectoInterface> buscatTodosPublico() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'buscatTodosPublico'");
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
    
    private List<ProyectoInterface> generarListaProyectosAuthDto(List<Proyecto> proyectos){
        List<ProyectoInterface> proyectosDto = new ArrayList<>();

        for (Proyecto proyecto : proyectos) {
            proyectosDto.add(fromProyectoToProyectoAuthDto(proyecto));
        }

        return proyectosDto;
    }
}

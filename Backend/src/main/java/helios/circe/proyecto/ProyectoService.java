package helios.circe.proyecto;

import java.util.List;

import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;

public interface ProyectoService {
    
    List<ProyectoBaseDto> buscarTodos(String token);
    ProyectoBaseDto buscarPorId(int id);
    Proyecto crearProyecto(ProyectoRequestDto proyectoDto);
    Proyecto modificarProyecto(Proyecto proyectoDto);
    boolean cancelarProyecto(int idProyecto);

}

package helios.circe.tarea;

import java.util.List;

import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaRequestDto;

public interface TareaService {

    List<TareaBaseDto> buscarTodos(String token);
    TareaBaseDto buscarPorId(int idTarea);
    Tarea modificarTarea(TareaModificarDto tareaDto);
    Tarea crearTarea(TareaRequestDto tareaRequestDto);
    List<Tarea> buscarPorResponsable(String responsable);

}

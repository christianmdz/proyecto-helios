package helios.circe.tarea;

import java.util.List;

import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaRequestDto;

public interface TareaService {

    List<TareaBaseDto> buscarTodos(String token);
    TareaBaseDto detalleTarea(String campo, int idTarea);
    Tarea buscarPorId(int idTarea);
    boolean modificarTarea(String campo, TareaModificarDto tareaDto);
    boolean crearTarea(TareaRequestDto tareaRequestDto);
    boolean existeTarea(int idTarea);
    boolean autorizacionPorCampo(String campo, int idTarea);
}

package helios.circe.tarea;

import java.util.List;

import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaRequestDto;

public interface TareaService {

    List<TareaBaseDto> buscarTodos(String token);
    TareaBaseDto buscarPorId(String campo, int idTarea);
    boolean modificarTarea(String campo, TareaModificarDto tareaDto);
    boolean crearTarea(TareaRequestDto tareaRequestDto);

    boolean autorizacionPorCampo(String campo, int idTarea);
}

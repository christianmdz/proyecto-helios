package helios.circe.naventarea;

import java.util.List;

import helios.circe.naventarea.dto.NaveganteEnTareaAltaDto;
import helios.circe.naventarea.dto.NaveganteEnTareaDto;
import helios.circe.tarea.TareaService;

public interface NaveganteEnTareaService {

    List<NaveganteEnTareaDto> buscarTripulantesEnTarea(String campo, int idTarea, TareaService tareaService);
    boolean altaNaveganteEnTarea(NaveganteEnTareaAltaDto naveganteEnTareaDto, TareaService tareaService);
    boolean bajaNaveganteEnTarea(int idTarea, int idNavegante);
}

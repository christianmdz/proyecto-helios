package helios.circe.naventarea;

import java.util.List;

import helios.circe.navegante.dto.NaveganteBaseDto;

public interface NaveganteEnTareaService {

    List<NaveganteBaseDto> buscarTripulantesEnTarea(String campo, int idTarea);

}

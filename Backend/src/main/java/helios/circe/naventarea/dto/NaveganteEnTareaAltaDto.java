package helios.circe.naventarea.dto;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaveganteEnTareaAltaDto {

    int idNavegante;
    int idTarea;
    Date fechaIncorporacion;
    String jornada;
    String asignacion;
}

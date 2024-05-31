package helios.circe.navenproy.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaveganteEnProyectoAltaDto {
    
    int idNavegante;
    int idProyecto;
    Date fechaIncorporacion;
    int diasAsignados;

}

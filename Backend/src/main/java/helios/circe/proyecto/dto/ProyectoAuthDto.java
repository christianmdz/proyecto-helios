package helios.circe.proyecto.dto;

import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class ProyectoAuthDto extends ProyectoBaseDto{
    
    String campo;
    String descripcion;
    String directorEmail;
    Date fechaInicio;
    Date fechaFin;
    String etapa;

}

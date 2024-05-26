package helios.circe.proyecto.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class ProyectoPublicoDto extends ProyectoBaseDto{
    
    String descripcion;
    String campo;
}

package helios.circe.navegante.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class NavegantePublicoDto extends NaveganteBaseDto{
    
    String apellido;
    String rol;
    String campo;
    String nave;

}

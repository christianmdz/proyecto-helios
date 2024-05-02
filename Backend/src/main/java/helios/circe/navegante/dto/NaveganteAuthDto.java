package helios.circe.navegante.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class NaveganteAuthDto extends NaveganteBaseDto{
    
    String username;
    String apellido;
    String email;
    String rol;
    String campo;
    String nave;

}

package helios.circe.navegante;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class NaveganteInfoPublicaDto {
    
    String nombre;
    String apellido;

    @Enumerated(EnumType.STRING)
    Role rol;
    @Enumerated(EnumType.STRING)
    Campo campo;
    
}

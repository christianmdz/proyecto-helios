package helios.circe.navegante.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class NaveganteBaseDto {
    
    int id;
    String nombre;
}

package helios.circe.proyecto.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class ProyectoBaseDto {
    
    int id;
    String nombre;
    String director;

}

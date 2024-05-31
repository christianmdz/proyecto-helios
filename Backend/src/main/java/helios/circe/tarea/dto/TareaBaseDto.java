package helios.circe.tarea.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class TareaBaseDto {

    int id;
    String nombre;
    String responsable;
    
}

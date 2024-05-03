package helios.circe.tarea.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaPublicoDto extends TareaBaseDto{

    String descripcion;

}

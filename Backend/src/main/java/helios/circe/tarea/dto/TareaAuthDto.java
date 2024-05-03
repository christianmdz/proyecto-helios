package helios.circe.tarea.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class TareaAuthDto extends TareaBaseDto{

   
   String frecuencia; 
   String campo;
   String responsableEmail;


}

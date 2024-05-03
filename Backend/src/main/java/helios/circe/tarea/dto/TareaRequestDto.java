package helios.circe.tarea.dto;

import lombok.Data;

@Data
public class TareaRequestDto {

    String responsable;
    String campo;
    String nombre;
    String descripcion;
    String frecuencia;

}

package helios.circe.tarea.dto;

import lombok.Data;

@Data
public class TareaRequestDto {

    int  idResponsable;
    String campo;
    String nombre;
    String descripcion;
    String frecuencia;

}

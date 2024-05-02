package helios.circe.proyecto;

import lombok.Data;

@Data
public class ProyectoBasicoDto implements ProyectoInterface{
    
    int id;
    String nombre;
    String director;
    String descripcion;
}

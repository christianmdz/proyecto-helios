package helios.circe.proyecto;

import java.util.Date;

import lombok.Data;

@Data
public class ProyectoAuthDto implements ProyectoInterface{
    
    int id;
    String nombre;
    String campo;
    String director;
    String directorEmail;
    String descripcion;
    Date fechaInicio;
    Date fechaFin;
    String etapa;

}

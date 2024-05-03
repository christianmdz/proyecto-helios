package helios.circe.proyecto.dto;

import java.util.Date;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class ProyectoModificarDto extends ProyectoBaseDto{
    
    int idDirector;
    String campo;
    String descripcion;
    Date fechaInicio;
    Date fechaFin;
    String etapa;
}

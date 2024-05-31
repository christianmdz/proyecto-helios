package helios.circe.proyecto.dto;

import java.util.Date;


import lombok.Data;

@Data
public class ProyectoRequestDto {

    int idDirector;
    String campo;
    String nombre;
    String descripcion;
    Date fechaInicio;
    Date fechaFin;
    String etapa;

}

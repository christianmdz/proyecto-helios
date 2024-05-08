package helios.circe.navenproy.dto;

import java.util.Date;

import helios.circe.navegante.Campo;
import helios.circe.navegante.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaveganteEnProyectoDto {
    
    int id;
    String nombre;
    String apellido;
    String username;
    String email;
    Role rol;
    Campo campo;
    int idNave;
    Date fechaIncorporacion;
    int diasAsignados;

}

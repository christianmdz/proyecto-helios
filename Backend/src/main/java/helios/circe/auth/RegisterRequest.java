package helios.circe.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Esta clase representa la información recibida en la petición que llega
 * al Controlador de registro
*/

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    
    String username;
    String password;
    String nombre;
    String apellido;
    String email;

}

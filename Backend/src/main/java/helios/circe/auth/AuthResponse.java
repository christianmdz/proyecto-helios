package helios.circe.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Esta clase representa la respuesta que devuelve el controlador
 * tanto en el registro como en el login
 * Contiene el token
 */

 @Data
 @Builder
 @AllArgsConstructor
 @NoArgsConstructor
public class AuthResponse {
    
    String token;

}

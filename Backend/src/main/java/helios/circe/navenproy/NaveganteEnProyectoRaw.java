package helios.circe.navenproy;

import java.util.Date;

import helios.circe.navegante.Navegante;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NaveganteEnProyectoRaw {
    
    Navegante navegante;
    Date fechaIncorporacion;
    int diasAsignados;
}

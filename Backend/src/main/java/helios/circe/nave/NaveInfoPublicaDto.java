package helios.circe.nave;

import lombok.Data;

@Data
public class NaveInfoPublicaDto {
    
    String nombre;
    String comandante;
    int tripulacion;
    String afiliacion;
    String motor;
    int carga;

}

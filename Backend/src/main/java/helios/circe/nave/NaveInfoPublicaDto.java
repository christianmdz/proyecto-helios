package helios.circe.nave;

import lombok.Data;

@Data
public class NaveInfoPublicaDto {
    
    int id;
    String nombre;
    String comandante;
    int tripulacion;
    String afiliacion;
    String motor;
    int carga;

}

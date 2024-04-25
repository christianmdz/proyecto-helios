package helios.circe.mision;

import lombok.Data;

@Data
public class MisionInfoPublicaDto {
    
    String nombre;
    String nave;
    String comandante;
    String descripcion;
    String destino;
    String fechaInicio;
    String duracion;
}

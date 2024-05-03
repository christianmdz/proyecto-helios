package helios.circe.mision;

import lombok.Data;

@Data
public class MisionInfoPublicaDto {
    
    int id;
    String nombre;
    String nave;
    String comandante;
    String descripcion;
    String destino;
    String fechaInicio;
    String duracion;
}

package helios.circe.nave;

import java.util.List;

public interface NaveService {
    
    Nave buscarUno(int idNave);
    NaveInfoPublicaDto buscarUnoPublicDto(int idNave);
    List<Nave> buscarTodos();
}

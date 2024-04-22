package helios.circe.nave;

import java.util.List;

public interface NaveService {
    
    Nave buscarUno(int idNave);
    List<Nave> buscarTodos();
}

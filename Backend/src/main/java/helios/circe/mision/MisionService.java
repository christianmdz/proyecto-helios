package helios.circe.mision;

import java.util.List;

public interface MisionService {
    
    Mision buscarUno(int idMision);
    List<Mision> buscarTodos();

}

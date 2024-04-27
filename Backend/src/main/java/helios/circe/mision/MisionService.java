package helios.circe.mision;

import java.util.List;

public interface MisionService {
    
    Mision buscarUno(int idMision);
    MisionInfoPublicaDto buscarUnoPublicDto(int idMision);
    List<Mision> buscarTodos();

}

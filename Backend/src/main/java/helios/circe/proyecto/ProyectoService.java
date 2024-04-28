package helios.circe.proyecto;

import java.util.List;

public interface ProyectoService {
    
    List<Proyecto> buscarTodos();
    Proyecto buscarPorId(int id);
    List<Proyecto> buscarPorCampo(String campo);
    List<Proyecto> buscarPorDirector(String director);

}

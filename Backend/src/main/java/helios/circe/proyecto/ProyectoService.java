package helios.circe.proyecto;

import java.util.List;

public interface ProyectoService {
    
    List<ProyectoInterface> buscarTodos();
    List<ProyectoInterface> buscatTodosPublico();
    Proyecto buscarPorId(int id);
    List<ProyectoInterface> buscarPorCampo(String campo);
    List<ProyectoInterface> buscarPorDirector(String director);

}

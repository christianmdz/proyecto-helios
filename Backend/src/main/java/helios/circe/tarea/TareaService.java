package helios.circe.tarea;

import java.util.List;

public interface TareaService {
    
    List<Tarea> buscarTodos();
    Tarea buscarPorId(int idTarea);
    List<Tarea> buscarPorCampo(String campo);
    List<Tarea> buscarPorResponsable(String responsable);

}

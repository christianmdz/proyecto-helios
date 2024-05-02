package helios.circe.proyecto;

import java.util.List;

import helios.circe.proyecto.dto.ProyectoBaseDto;

public interface ProyectoService {
    
    List<ProyectoBaseDto> buscarTodos();
    List<ProyectoBaseDto> buscatTodosPublico();
    Proyecto buscarPorId(int id);
    List<ProyectoBaseDto> buscarPorCampo(String campo);
    List<ProyectoBaseDto> buscarPorDirector(String director);

}

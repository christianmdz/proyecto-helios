package helios.circe.proyecto;

import java.util.List;

import helios.circe.proyecto.dto.ProyectoBaseDto;

public interface ProyectoService {
    
    List<ProyectoBaseDto> buscarTodos(String token);
    ProyectoBaseDto buscarPorId(int id);

}

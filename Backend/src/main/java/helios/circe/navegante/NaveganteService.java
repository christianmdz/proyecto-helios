package helios.circe.navegante;

import java.util.List;

import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.tarea.dto.TareaBaseDto;

public interface NaveganteService {
    
    NaveganteBaseDto detalleNavegante(String campo, int idNavegante);
    Navegante buscarPorId(int idNavegante);
    Navegante buscarPorUsername(String username);
    boolean existeNavegante(int idNavegante);
    
    List<NaveganteBaseDto> infoPublicaTripulacion();
    List<NaveganteBaseDto> buscarTodos(String token);

    List<ProyectoBaseDto> proyectosPorNavegante(int idNavegante);
    List<TareaBaseDto> tareasPorNavegante(int idNavegante);

}

package helios.circe.proyecto;

import java.util.List;

import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;

public interface ProyectoService {
    
    List<ProyectoBaseDto> buscarTodos(String token);
    ProyectoBaseDto buscarPorId(String campo, int idProyecto);
    boolean crearProyecto(ProyectoRequestDto proyectoDto);
    boolean modificarProyecto(ProyectoModificarDto proyectoDto);
    boolean cancelarProyecto(int idProyecto);

    boolean autorizacionPorCampo(String campo, int idProyecto);

}

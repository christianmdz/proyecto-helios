package helios.circe.proyecto;

import java.util.List;

import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;

public interface ProyectoService {
    
    List<ProyectoBaseDto> listaProyectos(String token);
    ProyectoBaseDto detalleProyecto(String campo, int idProyecto);
    boolean crearProyecto(ProyectoRequestDto proyectoDto);
    boolean modificarProyecto(String campo, ProyectoModificarDto proyectoDto);
    boolean cancelarProyecto(int idProyecto);
    boolean autorizacionPorCampo(String campo, int idProyecto);
    boolean existeProyecto(int idProyecto);
    String campoDeProyecto(int idProyecto);

    Proyecto buscarPorId(int idProyecto);
}

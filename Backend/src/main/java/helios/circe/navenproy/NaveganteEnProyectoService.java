package helios.circe.navenproy;

import java.util.List;

import helios.circe.navenproy.dto.NaveganteEnProyectoAltaDto;
import helios.circe.navenproy.dto.NaveganteEnProyectoDto;
import helios.circe.proyecto.ProyectoService;

public interface NaveganteEnProyectoService {
    
    List<NaveganteEnProyectoDto> buscarTripulantesEnProyecto(String campo, int idProyecto, ProyectoService proyectoService);
    boolean altaNaveganteEnProyecto(NaveganteEnProyectoAltaDto naveganteEnProyectoDto, ProyectoService proyectoService);
    boolean bajaNaveganteEnProyecto(int idProyecto, int idNavegante);

}

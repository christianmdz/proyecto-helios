package helios.circe.navenproy;

import java.util.List;

public interface NaveganteEnProyectoService {
    
    List<NaveganteEnProyectoDto> buscarTripulantesEnProyecto(String campo, int idProyecto);
    NaveganteEnProyecto buscarPorDirector(int idDirector);

}

package helios.circe.navenproy;

import java.util.List;

import helios.circe.navegante.dto.NaveganteBaseDto;

public interface NaveganteEnProyectoService {
    
    List<NaveganteBaseDto> buscarTripulantesEnProyecto(String campo, int idProyecto);
    NaveganteEnProyecto buscarPorDirector(int idDirector);

}

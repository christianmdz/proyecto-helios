package helios.circe.navenproy;

import java.util.List;

import helios.circe.navegante.Navegante;

public interface NaveganteEnProyectoService {
    
    List<Navegante> buscarTripulantesEnProyecto(int idProyecto);

}

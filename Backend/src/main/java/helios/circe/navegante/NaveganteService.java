package helios.circe.navegante;

import java.util.List;

import helios.circe.navegante.dto.NaveganteBaseDto;

public interface NaveganteService {
    
    Navegante buscarPorId(int idNavegante);
    Navegante buscarPorUsername(String username);

    List<Navegante> buscarPorRol(String rol);
    List<Navegante> buscarPorCampo(String campo);
    
    List<NaveganteBaseDto> infoPublicaTripulacion();
    List<Navegante> buscarTodos();

}

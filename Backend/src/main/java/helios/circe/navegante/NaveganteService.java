package helios.circe.navegante;

import java.util.List;

public interface NaveganteService {
    
    Navegante buscarPorId(int idNavegante);
    Navegante buscarPorUsername(String username);

    List<Navegante> buscarPorRol(String rol);
    List<Navegante> buscarPorCampo(String campo);
    
    List<NaveganteInfoPublicaDto> infoPublicaTripulacion();
    List<Navegante> buscarTodos();

}

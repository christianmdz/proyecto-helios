package helios.circe.navegante;

import java.util.List;

import helios.circe.navegante.dto.NaveganteBaseDto;

public interface NaveganteService {
    
    NaveganteBaseDto detalleNavegante(String campo, int idNavegante);
    Navegante buscarPorId(int idNavegante);
    Navegante buscarPorUsername(String username);
    boolean existeNavegante(int idNavegante);
    
    List<NaveganteBaseDto> infoPublicaTripulacion();
    List<NaveganteBaseDto> buscarTodos(String token);

}

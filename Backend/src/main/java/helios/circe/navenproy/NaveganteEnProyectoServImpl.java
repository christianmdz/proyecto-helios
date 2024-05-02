package helios.circe.navenproy;

import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.navegante.Navegante;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteEnProyectoServImpl implements NaveganteEnProyectoService{

    private final NaveganteEnProyectoRepository nepRep;

    @Override
    public List<Navegante> buscarTripulantesEnProyecto(int idProyecto) {
        return nepRep.findCrewByProject(idProyecto);
    }
    
}

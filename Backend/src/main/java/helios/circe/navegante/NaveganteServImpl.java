package helios.circe.navegante;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteServImpl implements NaveganteService{

    private final NaveganteRepository naveganteRepository;

    @Override
    public List<NaveganteInfoPublicaDto> infoPublicaTripulacion() {
        
        List<Navegante> navegantes = naveganteRepository.findAll();
        List<NaveganteInfoPublicaDto> tripulacion = new ArrayList<>(); 

        for (Navegante navegante : navegantes) {
            tripulacion.add(tripulanteToTripulantePublicDto(navegante));
        }
        return tripulacion;
    }

    private NaveganteInfoPublicaDto tripulanteToTripulantePublicDto(Navegante navegante){
        NaveganteInfoPublicaDto tripulante = new NaveganteInfoPublicaDto();
        tripulante.setNombre(navegante.getNombre());
        tripulante.setApellido(navegante.getApellido());
        tripulante.setRol(navegante.getRol());
        tripulante.setCampo(navegante.getCampo());
        return tripulante;
    }
    
}

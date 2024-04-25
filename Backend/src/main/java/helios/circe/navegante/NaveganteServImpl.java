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
        tripulante.setRol(navegante.getRol().toString().substring(5));
        tripulante.setCampo(navegante.getCampo().toString());
        tripulante.setNave(navegante.getNave().getNombre());
        return tripulante;
    }

    @Override
    public List<Navegante> buscarTodos() {
        return naveganteRepository.findAll();
    }

    @Override
    public Navegante buscarPorId(int idNavegante) {
        return naveganteRepository.findById(idNavegante).orElseThrow();
    }

    @Override
    public Navegante buscarPorUsername(String username) {
        return naveganteRepository.findByUsername(username).orElseThrow();
    }

    @Override
    public List<Navegante> buscarPorRol(String rol) {
        Role enumRole = Role.fromString(rol);
        return naveganteRepository.findByRole(enumRole);
    }

    @Override
    public List<Navegante> buscarPorCampo(String campo) {
        Campo enumCampo = Campo.fromString(campo);
        return naveganteRepository.findByField(enumCampo);
    }
    
}

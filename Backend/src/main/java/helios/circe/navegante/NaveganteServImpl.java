package helios.circe.navegante;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.navegante.dto.NavegantePublicoDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteServImpl implements NaveganteService {

    private final DtoMapper dtoMapper;
    private final NaveganteRepository naveganteRepository;

    @Override
    public List<NaveganteBaseDto> infoPublicaTripulacion() {

        List<Navegante> navegantes = naveganteRepository.findAll();
        List<NaveganteBaseDto> tripulacion = new ArrayList<>();

        for (Navegante navegante : navegantes) {
            tripulacion.add(dtoMapper.mapFromNavegante(navegante, NavegantePublicoDto.class));
        }
        return tripulacion;
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

    public String nombrePorUsername(String username){
        Navegante navegante = buscarPorUsername(username);
        return navegante.getNombre();
    }
    
}

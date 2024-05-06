package helios.circe.navegante;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.navegante.dto.NavegantePublicoDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteServImpl implements NaveganteService {

    private final DtoMapper dtoMapper;
    private final JwtService jwtService;
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
    public List<NaveganteBaseDto> buscarTodos(String token) {
        
        String rol = jwtService.getRolFromToken(token);

        List<Navegante> navegantes = new ArrayList<>();
        List<NaveganteBaseDto> listaNavegantes = new ArrayList<>();

        switch (rol) {
            case "COMANDANTE":
                navegantes = naveganteRepository.findAll();
                // TODO: mapearListaAListaDto
                break;
        
            default:
                break;
        }

        return null;

        // TODO: buscartodos navegante
        
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

package helios.circe.navegante;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.dto.NaveganteAuthDto;
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
                mapearListaNavegantesADto(navegantes, listaNavegantes, NaveganteAuthDto.class);
                break;
            case "MANDO":
            case "TRIPULANTE":
                String campo = jwtService.getCampoFromToken(token);
                navegantes = buscarPorCampo(campo);
                mapearListaNavegantesADto(navegantes, listaNavegantes, NaveganteAuthDto.class);
                break;
            case "COLONO":
                navegantes = naveganteRepository.findAll();
                mapearListaNavegantesADto(navegantes, listaNavegantes, NavegantePublicoDto.class);
            default:
                throw new SecurityException();
        }

        return null;
    }

    private void mapearListaNavegantesADto(List<Navegante> listaNavegantesOrigen, List<NaveganteBaseDto> listaNavegantesDestio, Class<? extends NaveganteBaseDto> dtoClass){

        for(Navegante navegante : listaNavegantesOrigen){
            listaNavegantesDestio.add(dtoMapper.mapFromNavegante(navegante, dtoClass));
        }
    }

    @Override
    public NaveganteBaseDto detalleNavegante(String campo, int idNavegante) {

        Navegante navegante = naveganteRepository.findById(idNavegante).orElseThrow();

        if(navegante == null){
            throw new NoSuchElementException();
        }

        if(!autorizacionPorCampo(campo, navegante.getCampo().name())){
            throw new SecurityException();
        }

        NaveganteAuthDto naveganteDto = dtoMapper.mapFromNavegante(navegante, NaveganteAuthDto.class);

        return naveganteDto;

    }

    @Override
    public Navegante buscarPorUsername(String username) {
        return naveganteRepository.findByUsername(username).orElseThrow();
    }

    private List<Navegante> buscarPorCampo(String campo) {
        Campo enumCampo = Campo.fromString(campo);
        return naveganteRepository.findByField(enumCampo);
    }

    public String nombrePorUsername(String username){
        Navegante navegante = buscarPorUsername(username);
        return navegante.getNombre();
    }

    private boolean autorizacionPorCampo(String campo, String campoProyecto){
        return (campo.equals(campoProyecto) || campo.equals("LIDER"));
    }

    @Override
    public Navegante buscarPorId(int idNavegante) {
        return naveganteRepository.findById(idNavegante).orElseThrow();
    }

    @Override
    public boolean existeNavegante(int idNavegante) {
        return naveganteRepository.existsById(idNavegante);
    }
    
}

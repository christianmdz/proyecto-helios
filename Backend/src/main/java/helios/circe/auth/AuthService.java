package helios.circe.auth;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.nave.Nave;
import helios.circe.nave.NaveService;
import helios.circe.navegante.Campo;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.NaveganteRepository;
import helios.circe.navegante.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final NaveganteRepository naveganteRepository;
    private final NaveService naveService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        Navegante navegante = naveganteRepository.findByUsername(request.getUsername()).orElseThrow();

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("rol", navegante.getRol());
        extraClaims.put("campo", navegante.getCampo());

        String token = jwtService.getToken(navegante,extraClaims);

        return AuthResponse.builder()
            .token(token)
            .build();
    }

    /*
     * Crea un navegante con los datos recibidos en la petición
     * Guarda el nuevo navegante en la DB
     */
    public AuthResponse register(RegisterRequest request) {
        
        Nave nave = naveService.buscarUno(1);

        Navegante navegante = Navegante.builder()
            .nave(nave)
            .username(request.getUsername())
            .password(passwordEncoder.encode(request.password))
            .nombre(request.getNombre())
            .apellido(request.getApellido())
            .email(request.getEmail())
            .rol(Role.ROLE_COLONO)
            .campo(Campo.NO_ASIGNADO)
            .build();
        
        naveganteRepository.save(navegante);

        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("rol", navegante.getRol());
        extraClaims.put("campo", navegante.getCampo());

        return AuthResponse.builder()
            .token(jwtService.getToken(navegante, extraClaims))
            .build();
    }
    
}

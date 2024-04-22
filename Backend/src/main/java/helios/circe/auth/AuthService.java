package helios.circe.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.navegante.Campo;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.NaveganteRepository;
import helios.circe.navegante.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final NaveganteRepository naveganteRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        Navegante navegante = naveganteRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.getToken(navegante);
        return AuthResponse.builder()
            .token(token)
            .build();
    }

    /*
     * Crea un navegante con los datos recibidos en la petición
     * Guarda el nuevo navegante en la DB
     */
    public AuthResponse register(RegisterRequest request) {
        
        Navegante navegante = Navegante.builder()
            .username(request.getUsername())
            .password(passwordEncoder.encode(request.password))
            .rol(Role.ROLE_COLONO)
            .campo(Campo.NO_ASIGNADO)
            .build();
        
        naveganteRepository.save(navegante);

        return AuthResponse.builder()
            .token(jwtService.getToken(navegante))
            .build();
    }
    
}

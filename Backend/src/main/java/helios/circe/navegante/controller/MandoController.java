package helios.circe.navegante.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
// import helios.circe.mision.MisionService;
// import helios.circe.nave.NaveService;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.NaveganteService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mando")
@RequiredArgsConstructor
public class MandoController {

    private final JwtService jwtService;
    // private final NaveService naveService;
    // private final MisionService misionService;
    private final NaveganteService naveganteService;

    @GetMapping("/info-tripulacion")
    public List<Navegante> informacionTripulacion(HttpServletRequest request){
        
        String token = jwtService.getTokenFromRequest(request);
        String campo = jwtService.getCampoFromToken(token);

        return naveganteService.buscarPorCampo(campo);
    }

}

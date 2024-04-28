package helios.circe.proyecto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
// import helios.circe.navegante.NaveganteService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/proyectos")
@RequiredArgsConstructor
public class ProyectoController {
    
    private final JwtService jwtService;
    private final ProyectoService proyectoService;
    // private final NaveganteService naveganteService;

    @GetMapping("/info-proyectos")
    public List<Proyecto> informacionProyectos(HttpServletRequest request) {
        
        List<Proyecto> listaProyectos = new ArrayList<>();

        String campo = jwtService.getCampoFromRequest(request);

        switch (campo) {
            case "LIDER":
                listaProyectos = proyectoService.buscarTodos();
                break;
            case "INGENIERIA":
            case "CIENCIA":
            case "NAVEGACION":
                listaProyectos = proyectoService.buscarPorCampo(campo);
            default:
                break;
        }

        return listaProyectos;
    }
    
}

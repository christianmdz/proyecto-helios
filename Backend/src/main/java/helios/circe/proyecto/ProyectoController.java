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
    public List<ProyectoInterface> informacionProyectos(HttpServletRequest request) {
        
        List<ProyectoInterface> listaProyectos = new ArrayList<>();

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

    /**
     * TODO:
     * 
     *      COMANDANTE/MANDO
     *          - GET    /proyectos/info-proyectos
     *          - GET    /proyectos/info-proyectos/{idProyecto} : ProyectoAuthDto
     *          - POST   /proyectos/nuevo-proyecto
     *          - PUT    /proyectos/modificar-proyecto : ProyectoAuthDto
     *          - DELETE /proyectos/eliminar-proyecto/{idProyecto} : Modificar estado a Cancelado
     *          - GET    /proyectos/tripulacion-en-proyecto/{idProyecto}
     *      TRIPULANTE
     *          - GET    /proyectos/info-proyectos
     *          - GET    /proyectos/info-proyectos/{idProyecto} : ProyectoAuthDto
     *          
    */
    
}

/*
 * Controlador rutas solo lectura
*/

package helios.circe.proyecto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
import helios.circe.proyecto.dto.ProyectoBaseDto;
// import helios.circe.navegante.NaveganteService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/proyectos")
@RequiredArgsConstructor
public class ProyectoController {
    
    private final JwtService jwtService;
    private final ProyectoService proyectoService;
    // private final NaveganteService naveganteService;

    @GetMapping("/info-proyectos")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public List<ProyectoBaseDto> informacionProyectos(HttpServletRequest request) {
        
        List<ProyectoBaseDto> listaProyectos = new ArrayList<>();

        String token = jwtService.getTokenFromRequest(request);
        listaProyectos = proyectoService.buscarTodos(token);

        return listaProyectos;
    }

    @GetMapping("info-proyectos/{idProyecto}")
    public ResponseEntity<?> detalleProyecto(HttpServletRequest request, @PathVariable int idProyecto){

        String campo = jwtService.getCampoFromRequest(request);
        ProyectoBaseDto proyectoDto = proyectoService.buscarPorId(campo, idProyecto);
        
        if(proyectoDto == null) {return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Acceso no autorizado");}
        return ResponseEntity.ok(proyectoDto);
    }
}

/*
 * Controlador rutas solo lectura
*/

package helios.circe.proyecto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.navenproy.NaveganteEnProyectoService;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;
// import helios.circe.navegante.NaveganteService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/proyectos")
@RequiredArgsConstructor
public class ProyectoController {
    
    private final JwtService jwtService;
    private final ProyectoService proyectoService;
    private final NaveganteEnProyectoService navEnProyServ;

    @GetMapping("/info-proyectos")
    public ResponseEntity<?> informacionProyectos(HttpServletRequest request) { 
        try{
            List<ProyectoBaseDto> listaProyectos = new ArrayList<>();
            String token = jwtService.getTokenFromRequest(request);
            listaProyectos = proyectoService.buscarTodos(token);
            return ResponseEntity.ok(listaProyectos);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al obtener la lista de proyectos");
        }
    }

    @GetMapping("/info-proyectos/{idProyecto}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> detalleProyecto(HttpServletRequest request, @PathVariable int idProyecto){

        String campo = jwtService.getCampoFromRequest(request);

        try {
            ProyectoBaseDto proyectoDto = proyectoService.buscarPorId(campo, idProyecto);
            if(proyectoDto == null) {return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Acceso no autorizado");}
            return ResponseEntity.ok(proyectoDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Proyecto no encontrado");
        }
    }

    @PostMapping("/nuevo-proyecto")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> nuevoProyecto(@RequestBody ProyectoRequestDto proyectoDto){
        if(proyectoService.crearProyecto(proyectoDto)) {return ResponseEntity.ok().body("Alta proyecto completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Alta proyecto");}
    }

    @PutMapping("/proyectos/modificar-proyecto")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> modificarProyecto(@RequestBody ProyectoModificarDto proyecto){
        if(proyectoService.modificarProyecto(proyecto)) {return ResponseEntity.ok().body("Actualización proyecto completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Modificar proyecto");}
    }

    @DeleteMapping("/proyectos/eliminar-proyecto/{idProyecto}")
    @PreAuthorize("hasRole('COMANDANTE')")
    public ResponseEntity<?> eliminarProyecto(@PathVariable int idProyecto){
        if(proyectoService.cancelarProyecto(idProyecto)) {return ResponseEntity.ok().body("Eliminación proyecto completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Eliminar proyecto");}
    }

    @GetMapping("/tripulacion-en-proyecto/{idProyecto}")
    public List<NaveganteBaseDto> tripulantesEnProyecto(HttpServletRequest request, @PathVariable int idProyecto){
        String campo = jwtService.getCampoFromRequest(request);
        return navEnProyServ.buscarTripulantesEnProyecto(campo, idProyecto);
    }
}

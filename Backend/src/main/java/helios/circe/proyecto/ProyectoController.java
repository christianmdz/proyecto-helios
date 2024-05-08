package helios.circe.proyecto;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
import helios.circe.navenproy.NaveganteEnProyectoService;
import helios.circe.navenproy.dto.NaveganteEnProyectoDto;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;
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
            listaProyectos = proyectoService.listaProyectos(token);
            return (!listaProyectos.isEmpty()) ? ResponseEntity.ok(listaProyectos) : ResponseEntity.status(HttpStatus.NO_CONTENT).body("Sin proyectos");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al obtener la lista de proyectos");
        }
    }

    @GetMapping("/info-proyectos/{idProyecto}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> detalleProyecto(HttpServletRequest request, @PathVariable int idProyecto){

        String campo = jwtService.getCampoFromRequest(request);
        ProyectoBaseDto proyectoDto = proyectoService.detalleProyecto(campo, idProyecto);
        return ResponseEntity.ok(proyectoDto);
    }

    @PostMapping("/nuevo-proyecto")
    @PreAuthorize("hasAnyRole('COMANDANTE')")
    public ResponseEntity<?> nuevoProyecto(@RequestBody ProyectoRequestDto proyectoDto){
        if(proyectoService.crearProyecto(proyectoDto)) {return ResponseEntity.ok().body("Alta proyecto completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Alta proyecto");}
    }

    @PutMapping("/modificar-proyecto")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> modificarProyecto(HttpServletRequest request, @RequestBody ProyectoModificarDto proyecto){
        String campo = jwtService.getCampoFromRequest(request);
        if(proyectoService.modificarProyecto(campo, proyecto)) {return ResponseEntity.ok().body("Actualización proyecto completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Modificar proyecto");}
    }

    @DeleteMapping("/eliminar-proyecto/{idProyecto}")
    @PreAuthorize("hasRole('COMANDANTE')")
    public ResponseEntity<?> eliminarProyecto(@PathVariable int idProyecto){
        if(proyectoService.cancelarProyecto(idProyecto)) {return ResponseEntity.ok().body("Eliminación proyecto completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Eliminar proyecto");}
    }

    @GetMapping("/tripulacion-en-proyecto/{idProyecto}")
    public ResponseEntity<?> tripulantesEnProyecto(HttpServletRequest request, @PathVariable int idProyecto){

        String campo = jwtService.getCampoFromRequest(request);
        List<NaveganteEnProyectoDto> listaTripulantes = navEnProyServ.buscarTripulantesEnProyecto(campo, idProyecto, proyectoService);
        return (!listaTripulantes.isEmpty()) ? ResponseEntity.ok(listaTripulantes) : ResponseEntity.status(HttpStatus.NO_CONTENT).body(listaTripulantes);
    }
}


/*
 * TODO: endpoints Proyecto
 *  + lista de proyectos
 *  + detalle proyectos
 *  = crear proyectos : rediseño dto, solo comandante
 *  = modificar proyectos : rediseño dto, comprobar campo modificacion
 *  + eliminar proyecto
 *  + lista tripulantes por proyectos
 *  ----------------------------
 *  - Pendiente
 *  = Implementado
 *  + Testeado
 */
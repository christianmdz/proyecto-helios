package helios.circe.navegante.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
import helios.circe.navegante.NaveganteService;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.tarea.dto.TareaBaseDto;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/navegante")
@RequiredArgsConstructor
public class NaveganteController {
    
    private final JwtService jwtService;
    private final NaveganteService naveganteService;

    @GetMapping("/info-tripulacion")
    public ResponseEntity<?> informacionTripulacion(HttpServletRequest request){

        try {
            List<NaveganteBaseDto> listaNavegantes = new ArrayList<>();
            String token = jwtService.getTokenFromRequest(request);
            listaNavegantes = naveganteService.buscarTodos(token);
            return (!listaNavegantes.isEmpty())
                ? ResponseEntity.ok(listaNavegantes)
                : ResponseEntity.status(HttpStatus.NO_CONTENT).body("Sin tripulantes");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al obtener datos de tripulación");
        }

    }

    @GetMapping("info-tripulacion/{idTripulante}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> detalleTripulante(HttpServletRequest request, @PathVariable int idTripulante){

        String campo = jwtService.getCampoFromRequest(request);
        NaveganteBaseDto naveganteDto = naveganteService.detalleNavegante(campo, idTripulante);
        return ResponseEntity.ok(naveganteDto);
    }

    @GetMapping("proyectos-de-tripulante/{idTripulante}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO', 'TRIPULANTE')")
    public ResponseEntity<?> proyectosPorTripulante(@PathVariable int idTripulante){
        List<ProyectoBaseDto> listaProyectos = naveganteService.proyectosPorNavegante(idTripulante);
        return (!listaProyectos.isEmpty())
            ? ResponseEntity.ok(listaProyectos)
            : ResponseEntity.status(HttpStatus.NO_CONTENT).body("Sin proyectos");
    }
    
    @GetMapping("tareas-de-tripulante/{idTripulante}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO', 'TRIPULANTE')")
    public ResponseEntity<?> tareasPorTripulante(@PathVariable int idTripulante){
        List<TareaBaseDto> listaTareas = naveganteService.tareasPorNavegante(idTripulante);
        return (!listaTareas.isEmpty())
            ? ResponseEntity.ok(listaTareas)
            : ResponseEntity.status(HttpStatus.NO_CONTENT).body("Sin tareas");
    }
}

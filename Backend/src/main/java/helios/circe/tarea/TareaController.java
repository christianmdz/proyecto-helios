package helios.circe.tarea;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
import helios.circe.naventarea.NaveganteEnTareaService;
import helios.circe.naventarea.dto.NaveganteEnTareaDto;
import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaRequestDto;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/tareas")
@RequiredArgsConstructor
public class TareaController {

    private final TareaService tareaService;
    private final JwtService jwtService;
    private final NaveganteEnTareaService navEnTarServ;

    @GetMapping("/info-tareas")
    public ResponseEntity<?> informacionTareas(HttpServletRequest request) {
        try{
            List<TareaBaseDto> listaTareas = new ArrayList<>();
            String token = jwtService.getTokenFromRequest(request);
            listaTareas = tareaService.buscarTodos(token);

            return (!listaTareas.isEmpty())
                ? ResponseEntity.ok(listaTareas)
                : ResponseEntity.status(HttpStatus.NO_CONTENT).body("Sin tareas");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al obtener la lista de tareas");
        }
    }

    @GetMapping("/info-tareas/{idTarea}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> detalleTarea(HttpServletRequest request, @PathVariable int idTarea) {
        
        String campo = jwtService.getCampoFromRequest(request);
        TareaBaseDto tareaDto = tareaService.detalleTarea(campo, idTarea);

        return ResponseEntity.ok(tareaDto);
    }

    @PostMapping("/nueva-tarea")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> nuevaTarea(@RequestBody TareaRequestDto tareaDto){

        return (tareaService.crearTarea(tareaDto))
            ? ResponseEntity.ok().body("Alta tarea completada")
            : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Alta tarea");
    }

    @PutMapping("/modificar-tarea")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> modificarTarea(HttpServletRequest request, @RequestBody TareaModificarDto tarea){
        
        String campo = jwtService.getCampoFromRequest(request);

        return (tareaService.modificarTarea(campo, tarea))
            ? ResponseEntity.ok().body("Actualización tarea completada")
            : ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Modificar tarea");
    }

    @GetMapping("/tripulacion-en-tarea/{idTarea}")
    public ResponseEntity<?> tripulantesEnTarea(HttpServletRequest request, @PathVariable int idTarea){
        
        String campo = jwtService.getCampoFromRequest(request);
        List<NaveganteEnTareaDto> listaTripulantes = navEnTarServ.buscarTripulantesEnTarea(campo, idTarea, tareaService);

        return (!listaTripulantes.isEmpty())
            ? ResponseEntity.ok(listaTripulantes)
            : ResponseEntity.status(HttpStatus.FORBIDDEN).body("Acceso no autorizado");
    }
}
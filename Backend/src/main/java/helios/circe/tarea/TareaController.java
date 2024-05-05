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
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.naventarea.NaveganteEnTareaService;
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
            return ResponseEntity.ok(listaTareas);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al obtener la lista de tareas");
        }
    }

    @GetMapping("/info-tareas/{idTarea}")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> detalleTarea(HttpServletRequest request, @PathVariable int idTarea) {
        
        String campo = jwtService.getCampoFromRequest(request);

        try {
            TareaBaseDto tareaDto = tareaService.buscarPorId(campo, idTarea);
            if(tareaDto == null)  {return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Acceso no autorizado");}
            return ResponseEntity.ok(tareaDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarea no encontrada");
        }
    }

    @PostMapping("/nueva-tarea")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> nuevaTarea(@RequestBody TareaRequestDto tareaDto){
        if(tareaService.crearTarea(tareaDto)) {return ResponseEntity.ok().body("Alta tarea completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Alta tarea");}
    }

    @PutMapping("/modificar-tarea")
    @PreAuthorize("hasAnyRole('COMANDANTE','MANDO')")
    public ResponseEntity<?> modificarTarea(HttpServletRequest request, @RequestBody TareaModificarDto tarea){
        String campo = jwtService.getCampoFromRequest(request);
        if(tareaService.modificarTarea(campo, tarea)) {return ResponseEntity.ok().body("Actualización tarea completada");}
        else {return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR: Modificar tarea");}
    }

    @GetMapping("/tripulacion-en-tarea/{idTarea}")
    public ResponseEntity<?> tripulantesEnTarea(HttpServletRequest request, @PathVariable int idTarea){
        String campo = jwtService.getCampoFromRequest(request);
        try{
            List<NaveganteBaseDto> listaTripulantes = navEnTarServ.buscarTripulantesEnTarea(campo, idTarea);
            if(listaTripulantes == null) {return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Acceso no autorizado");}
            return ResponseEntity.ok(listaTripulantes);
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lista tripulantes no encontrada");
        }
    }
}

/*
 * TODO: endpoints Tarea
 *  = lista de tareas
 *  = detalle tarea
 *  = crear tarea
 *  = modificar tarea
 *  = lista tripulantes por tarea
 *  ----------------------------
 *  - Pendiente
 *  = Implementado
 *  + Testeado
 */
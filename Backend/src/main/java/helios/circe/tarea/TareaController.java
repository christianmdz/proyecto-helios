package helios.circe.tarea;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
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

    @GetMapping("/info-tareas")
    public List<TareaBaseDto> informacionTareas(HttpServletRequest request) {
        String token = jwtService.getTokenFromRequest(request);
        return tareaService.buscarTodos(token);
    }

    @GetMapping("/info-tareas/{idTarea}")
    public TareaBaseDto informacionTarea(@PathVariable int idTarea) {
        return tareaService.buscarPorId(idTarea);
    }

    @PutMapping("/modificar-tarea")
    public boolean modificarTarae(@RequestBody TareaModificarDto tareaDto) {

        return tareaService.modificarTarea(tareaDto);
    }

    @PostMapping("/crear-tarea")
    public boolean crearTarea(@RequestBody TareaRequestDto tareaDto) {
        return tareaService.crearTarea(tareaDto);
    }

}

/**
 * TODO: Mover endpoints a ComandanteController
 */

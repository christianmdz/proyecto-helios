package helios.circe.navegante.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.navenproy.NaveganteEnProyectoService;
import helios.circe.naventarea.NaveganteEnTareaService;
import helios.circe.proyecto.Proyecto;
import helios.circe.proyecto.ProyectoService;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;
import helios.circe.tarea.TareaService;
import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaRequestDto;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/comandante")
@RequiredArgsConstructor
public class ComandanteController {

    private final JwtService jwtService;
    private final ProyectoService proyectoService;
    private final TareaService tareaService;
    private final NaveganteEnProyectoService navEnProyServ;
    private final NaveganteEnTareaService naveganteEnTareaService;

    @GetMapping("/proyectos/info-proyectos")
    public List<ProyectoBaseDto> listaProyectos(HttpServletRequest request) {
        String token = jwtService.getTokenFromRequest(request);
        return proyectoService.buscarTodos(token);
    }

    @GetMapping("/proyectos/info-proyectos/{idProyecto}")
    public ProyectoBaseDto detalleProyecto(@PathVariable int idProyecto) {
        return proyectoService.buscarPorId(idProyecto);
    }

    @GetMapping("/proyectos/tripulacion-en-proyecto/{idProyecto}")
    public List<NaveganteBaseDto> tripulantesEnProyecto(@PathVariable int idProyecto) {
        return navEnProyServ.buscarTripulantesEnProyecto(idProyecto);
    }

    @PostMapping("/proyectos/nuevo-proyecto")
    public Proyecto nuevoProyecto(@RequestBody ProyectoRequestDto proyectoDto) {
        return proyectoService.crearProyecto(proyectoDto);
    }

    @PutMapping("/proyectos/modificar-proyecto")
    public Proyecto modificarProyecto(@RequestBody ProyectoModificarDto proyecto) {
        return proyectoService.modificarProyecto(proyecto);
    }

    @DeleteMapping("/proyectos/eliminar-proyecto/{idProyecto}")
    public boolean eliminarProyecto(@PathVariable int idProyecto) {
        return proyectoService.cancelarProyecto(idProyecto);
    }

    // TODO : HIMAR * ENDPOINTS de tareas creados en Comandante

    @GetMapping("/tareas/info-tareas")
    public List<TareaBaseDto> informacionTareas(HttpServletRequest request) {
        String token = jwtService.getTokenFromRequest(request);
        return tareaService.buscarTodos(token);
    }

    @GetMapping("/tareas/info-tareas/{idTarea}")
    public TareaBaseDto informacionTarea(@PathVariable int idTarea) {
        return tareaService.buscarPorId(idTarea);
    }

    @GetMapping("/tareas/tripulacion-en-tarea/{idTarea}")
    public List<NaveganteBaseDto> listaNavegantesEnTarea(@PathVariable int idTarea) {
        return naveganteEnTareaService.buscarTripulantesEnTarea(idTarea);
    }

    @PutMapping("/tareas/modificar-tarea")
    public boolean modificarTarae(@RequestBody TareaModificarDto tareaDto) {
        return tareaService.modificarTarea(tareaDto);
    }

    @PostMapping("/tareas/crear-tarea")
    public boolean crearTarea(@RequestBody TareaRequestDto tareaDto) {
        return tareaService.crearTarea(tareaDto);
    }

}

/**
 * TODO: ENDPOINTS Proyectos
 * * GET /proyectos/info-proyectos
 * * GET /proyectos/info-proyectos/{idProyecto} : ProyectoAuthDto
 * * POST /proyectos/nuevo-proyecto
 * * PUT /proyectos/modificar-proyecto : ProyectoAuthDto
 * * DELETE /proyectos/eliminar-proyecto/{idProyecto} : Modificar estado a
 * Cancelado
 * * GET /proyectos/tripulacion-en-proyecto/{idProyecto}
 * 
 * ------------------
 * - Pendiente
 * = Implementados
 * * Testeado
 */

/**
 * TODO: HIMAR ENDPOINTS Tareas
 * * GET /tareas/info-tareas
 * * GET /tareas/info-tareas/{idTarea} : TareaAuthDto
 * * POST /tareas/nuevo-tarea
 * * PUT /tareas/modificar-tarea : TareaAuthDto
 * * GET /tareas/tripulacion-en-tarea/{idTarea}
 * - DELETE /tareas/eliminar-tarea/{idTarea}
 * ------------------
 * - Pendiente
 * = Implementados
 * * Testeado
 */
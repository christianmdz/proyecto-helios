package helios.circe.navegante.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.navenproy.NaveganteEnProyectoService;
import helios.circe.navenproy.dto.NaveganteEnProyectoAltaDto;
import helios.circe.naventarea.NaveganteEnTareaService;
import helios.circe.naventarea.dto.NaveganteEnTareaAltaDto;
import helios.circe.proyecto.ProyectoService;
import helios.circe.tarea.TareaService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/comandante")
@RequiredArgsConstructor
public class ComandanteController {

    private final NaveganteEnProyectoService naveganteEnProyectoService;
    private final NaveganteEnTareaService naveganteEnTareaService;
    private final ProyectoService proyectoService;
    private final TareaService tareaService;

    @PostMapping("/alta-navegante-proyecto")
    public ResponseEntity<?> altaNaveganteEnProyecto(@RequestBody NaveganteEnProyectoAltaDto naveganteDto){
        
        return naveganteEnProyectoService.altaNaveganteEnProyecto(naveganteDto, proyectoService)
                ? ResponseEntity.ok("Alta completada")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en alta");
    }

    @DeleteMapping("/baja-navegante-proyecto/{idProyecto}/{idNavegante}")
    public ResponseEntity<?> bajaNaveganteEnProyecto(@PathVariable int idProyecto, @PathVariable int idNavegante){
        
        return naveganteEnProyectoService.bajaNaveganteEnProyecto(idProyecto, idNavegante)
                ? ResponseEntity.ok("Baja completada")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en baja");
    }

    @PostMapping("/alta-navegante-tarea")
    public ResponseEntity<?> altaNaveganteEnTarea(@RequestBody NaveganteEnTareaAltaDto naveganteDto){

        return naveganteEnTareaService.altaNaveganteEnTarea(naveganteDto, tareaService)
                ? ResponseEntity.ok("Alta completada")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en alta");
    }

    @DeleteMapping("/baja-navegante-tarea/{idTarea}/{idNavegante}")
    public ResponseEntity<?> bajaNaveganteEnTarea(@PathVariable int idTarea, @PathVariable int idNavegante){
        return naveganteEnTareaService.bajaNaveganteEnTarea(idTarea, idNavegante)
                ? ResponseEntity.ok("Baja completada")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en baja");
    }

}
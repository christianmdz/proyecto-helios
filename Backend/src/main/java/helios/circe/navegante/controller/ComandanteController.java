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
import helios.circe.proyecto.ProyectoService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/comandante")
@RequiredArgsConstructor
public class ComandanteController {

    private final NaveganteEnProyectoService naveganteEnProyectoService;
    private final ProyectoService proyectoService;

    @PostMapping("/alta-navegante-proyecto")
    public ResponseEntity<?> altaNaveganteEnProyecto(@RequestBody NaveganteEnProyectoAltaDto navegante){
        
        /*
         * NaveganteEnProyectoDto (idNavegante, idProyecto, fechaIncorporacion, diasAsignados)
         * ID navegante, ID proyecto -> comprobar existencia
        */
        return naveganteEnProyectoService.altaNaveganteEnProyecto(navegante, proyectoService)
                ? ResponseEntity.ok("Alta completada")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error en alta");
    }

    @DeleteMapping("/baja-navegante-proyecto/{idNavegante}")
    public ResponseEntity<?> bajaNaveganteEnProyecto(@PathVariable int idNavegante){
        return null;
    }

}
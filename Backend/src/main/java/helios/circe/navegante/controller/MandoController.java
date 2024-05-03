package helios.circe.navegante.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mando")
@RequiredArgsConstructor
public class MandoController {

}

/**
 * TODO:
 *  = GET    /proyectos/info-proyectos
 *  = GET    /proyectos/info-proyectos/{idProyecto} : ProyectoAuthDto
 *  - PUT    /proyectos/modificar-proyecto : ProyectoAuthDto
 *  - DELETE /proyectos/eliminar-proyecto/{idProyecto} : Modificar estado a Cancelado
 *  - GET    /proyectos/tripulacion-en-proyecto/{idProyecto}
*/
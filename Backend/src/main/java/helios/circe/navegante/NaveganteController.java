package helios.circe.navegante;

// import java.util.List;

// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/navegante")
@RequiredArgsConstructor
public class NaveganteController {
    
    // private final NaveganteService naveganteService;

}

/**
 * TODO
 *      - GET   /navegantes/info-navegantes
 *      - GET   /navegantes/info-navegantes/{idNavegante}
 *      - GET   /navegantes/proyectos-navegante/{idNavegante}
 *      - PUT   /navegantes/asignacion-navegante
*/

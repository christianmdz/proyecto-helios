package helios.circe.navenproy;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.navegante.Navegante;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/navenproy")
@RequiredArgsConstructor
@CrossOrigin("*")
public class NaveganteEnProyectoController {
    
    private final NaveganteEnProyectoService naveganteEnProyectoService;

    @GetMapping("/por-proyecto/{idProyecto}")
    public List<Navegante> listaNavegantesEnProyecto(@PathVariable int idProyecto){
        return naveganteEnProyectoService.buscarTripulantesEnProyecto(idProyecto);
    }

}

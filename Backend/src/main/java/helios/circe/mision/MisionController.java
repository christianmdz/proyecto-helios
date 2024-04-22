package helios.circe.mision;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/mision")
@RequiredArgsConstructor
public class MisionController {
    
    private final MisionService misionService;

    @GetMapping("/uno/{idMision}")
    public Mision buscarMisionPorId(@PathVariable int idMision){
        return misionService.buscarUno(idMision);
    }

    @GetMapping("/todos")
    public List<Mision> buscarTodasMisiones() {
        return misionService.buscarTodos();
    }

}

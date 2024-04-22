package helios.circe.nave;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/nave")
@RequiredArgsConstructor
public class NaveController {

    private final NaveService naveService;

    @GetMapping("/uno/{idNave}")
    public Nave buscarNavePorId(@PathVariable int idNave){
        return naveService.buscarUno(idNave);
    }

}

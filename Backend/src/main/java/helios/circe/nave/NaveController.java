package helios.circe.nave;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.mision.Mision;
import helios.circe.mision.MisionService;
import helios.circe.navegante.NaveganteInfoPublicaDto;
import helios.circe.navegante.NaveganteService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/nave")
@RequiredArgsConstructor
public class NaveController {

    private final NaveService naveService;
    private final NaveganteService naveganteService;
    private final MisionService misionService;

    @GetMapping("/uno/{idNave}")
    public Nave buscarNavePorId(@PathVariable int idNave){
        return naveService.buscarUno(idNave);
    }

    @GetMapping("/mision/{idMision}")
    public Mision buscarMisionPorId(@PathVariable int idMision){
        return misionService.buscarUno(idMision);
    }

    @GetMapping("/mision/misiones")
    public List<Mision> buscarTodasMisiones() {
        return misionService.buscarTodos();
    }

    @GetMapping("/info-tripulacion")
    public List<NaveganteInfoPublicaDto> infoPublicaTripulacion(){
        return naveganteService.infoPublicaTripulacion();
    }

}

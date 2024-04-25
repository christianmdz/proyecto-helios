package helios.circe.nave;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.mision.MisionInfoPublicaDto;
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
    public NaveInfoPublicaDto buscarNavePorId(@PathVariable int idNave){
        return naveService.buscarUnoPublicDto(idNave);
    }

    @GetMapping("/mision/{idMision}")
    public MisionInfoPublicaDto buscarMisionPorId(@PathVariable int idMision){
        return misionService.buscarUnoPublicDto(idMision);
    }

    @GetMapping("/info-tripulacion")
    public List<NaveganteInfoPublicaDto> infoPublicaTripulacion(){
        return naveganteService.infoPublicaTripulacion();
    }

}

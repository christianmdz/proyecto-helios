package helios.circe.naventarea;

import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import java.util.List;
import helios.circe.navegante.dto.NaveganteBaseDto;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/tareas")
@RequiredArgsConstructor
public class NaveganteEnTareaController {

    private final NaveganteEnTareaService naveganteEnTareaService;

    @GetMapping("/tripulacion-en-tarea/{idTarea}")
    public List<NaveganteBaseDto> listaNavegantesEnTarea(@PathVariable int idTarea) {
        return naveganteEnTareaService.buscarTripulantesEnTarea(idTarea);
    }

}

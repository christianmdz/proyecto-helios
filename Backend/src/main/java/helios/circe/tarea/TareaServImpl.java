package helios.circe.tarea;

import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.navegante.Campo;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TareaServImpl implements TareaService{

    private final TareaRepository tareaRepository;

    @Override
    public List<Tarea> buscarTodos() {
        return tareaRepository.findAll();
    }

    @Override
    public Tarea buscarPorId(int idTarea) {
        return tareaRepository.findById(idTarea).orElseThrow();
    }

    @Override
    public List<Tarea> buscarPorCampo(String campo) {
        Campo enumCampo = Campo.fromString(campo);
        return tareaRepository.findByField(enumCampo);
    }

    @Override
    public List<Tarea> buscarPorResponsable(String responsable) {
        return tareaRepository.findByManager(responsable);
    }
    
}

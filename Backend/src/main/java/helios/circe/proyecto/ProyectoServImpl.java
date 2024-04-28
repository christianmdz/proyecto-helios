package helios.circe.proyecto;

import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.navegante.Campo;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProyectoServImpl implements ProyectoService{

    private final ProyectoRepository proyectoRepository;

    @Override
    public List<Proyecto> buscarTodos() {
        return proyectoRepository.findAll();
    }

    @Override
    public Proyecto buscarPorId(int idProyecto) {
        return proyectoRepository.findById(idProyecto).orElseThrow();
    }

    @Override
    public List<Proyecto> buscarPorCampo(String campo) {
        Campo enumCampo = Campo.fromString(campo);
        return proyectoRepository.findByField(enumCampo);
    }

    @Override
    public List<Proyecto> buscarPorDirector(String director) {
        return proyectoRepository.findByDirector(director);
    }

    
}

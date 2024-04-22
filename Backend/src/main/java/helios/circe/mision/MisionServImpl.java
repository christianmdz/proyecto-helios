package helios.circe.mision;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MisionServImpl implements MisionService{

    private final MisionRepository misionRepository;

    @Override
    public Mision buscarUno(int idMision) {
        return misionRepository.findById(idMision).orElseThrow();
    }

    @Override
    public List<Mision> buscarTodos() {
        return misionRepository.findAll();
    }
    
}

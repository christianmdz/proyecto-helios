package helios.circe.nave;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NaveServImpl implements NaveService{

    @Autowired
    private NaveRepository naveRepository;

    @Override
    public Nave buscarUno(int idNave) {
        return naveRepository.findById(idNave).orElseThrow();
    }

    @Override
    public List<Nave> buscarTodos() {
        return naveRepository.findAll();
    }
    
}

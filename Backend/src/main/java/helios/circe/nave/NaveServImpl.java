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
    public NaveInfoPublicaDto buscarUnoPublicDto(int idNave) {
        Nave nave = buscarUno(idNave);
        return naveToNavePublicoDto(nave);
    }

    @Override
    public List<Nave> buscarTodos() {
        return naveRepository.findAll();
    }

    private NaveInfoPublicaDto naveToNavePublicoDto(Nave nave){
        NaveInfoPublicaDto naveDto = new NaveInfoPublicaDto();
        naveDto.setId(nave.getId());
        naveDto.setComandante(nave.getComandante().getNombre());
        naveDto.setNombre(nave.getNombre());
        naveDto.setTripulacion(nave.getTripulacion());
        naveDto.setAfiliacion(nave.getAfiliacion());
        naveDto.setMotor(nave.getMotor());
        naveDto.setCarga(nave.getCarga());
        return naveDto;
    }
    
}

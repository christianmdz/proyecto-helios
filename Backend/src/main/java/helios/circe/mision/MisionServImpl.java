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

    @Override
    public MisionInfoPublicaDto buscarUnoPublicDto(int idMision) {
        Mision mision = buscarUno(idMision);
        return misionToMisionPublicaDto(mision);
    }

    private MisionInfoPublicaDto misionToMisionPublicaDto(Mision mision){
        MisionInfoPublicaDto misionDto = new MisionInfoPublicaDto();
        misionDto.setNombre(mision.getNombre());
        misionDto.setNave(mision.getNave().getNombre());
        misionDto.setComandante(mision.getNave().getComandante().getNombre());
        misionDto.setDescripcion(mision.getDescripcion());
        misionDto.setDestino(mision.getDestino());
        misionDto.setFechaInicio(mision.getFechaInicio().toString());
        misionDto.setDuracion(Integer.toString(mision.getDuracion()));
        return misionDto;
    }
    
}

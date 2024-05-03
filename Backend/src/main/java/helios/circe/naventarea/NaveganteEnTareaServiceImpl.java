package helios.circe.naventarea;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.dto.NaveganteAuthDto;
import helios.circe.navegante.dto.NaveganteBaseDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteEnTareaServiceImpl implements NaveganteEnTareaService {

    private final NaveganteEnTareaRepository netRep;
    private final DtoMapper dtoMapper;

    @Override
    public List<NaveganteBaseDto> buscarTripulantesEnTarea(int idTarea) {
        List<Navegante> navegantes = netRep.findCrewByTask(idTarea);
        List<NaveganteBaseDto> navegantesDto = new ArrayList<>();

        for (Navegante navegante : navegantes) {
            navegantesDto.add(dtoMapper.mapFromNavegante(navegante, NaveganteAuthDto.class));
        }
        return navegantesDto;
    }

}

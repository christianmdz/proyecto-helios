package helios.circe.naventarea;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.navegante.dto.NavegantePublicoDto;
import helios.circe.tarea.TareaService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteEnTareaServiceImpl implements NaveganteEnTareaService {

    private final DtoMapper dtoMapper;
    private final TareaService tareaService;
    private final NaveganteEnTareaRepository netRep;

    @Override
    public List<NaveganteBaseDto> buscarTripulantesEnTarea(String campo, int idTarea) {

        if(tareaService.autorizacionPorCampo(campo, idTarea)){
            
            List<Navegante> navegantes = netRep.findCrewByTask(idTarea);
            List<NaveganteBaseDto> navegantesDto = new ArrayList<>();
    
            for (Navegante navegante : navegantes) {
                navegantesDto.add(dtoMapper.mapFromNavegante(navegante, NavegantePublicoDto.class));
            }
            return navegantesDto;
        }
        else {return null;}
    }

}
// TODO: AuthorizationException 
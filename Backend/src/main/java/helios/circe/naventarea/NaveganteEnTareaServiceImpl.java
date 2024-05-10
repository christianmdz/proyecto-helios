package helios.circe.naventarea;

import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.NaveganteService;
import helios.circe.naventarea.dto.NaveganteEnTareaAltaDto;
import helios.circe.naventarea.dto.NaveganteEnTareaDto;
import helios.circe.tarea.TareaService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteEnTareaServiceImpl implements NaveganteEnTareaService {

    private final DtoMapper dtoMapper;
    private final NaveganteService naveganteService;
    private final NaveganteEnTareaRepository naveganteEnTareaRepository;

    @Override
    public List<NaveganteEnTareaDto> buscarTripulantesEnTarea(String campo, int idTarea, TareaService tareaService) {

        if(tareaService.autorizacionPorCampo(campo, idTarea)){
            
            List<NaveganteEnTareaDto> navegantesDto = naveganteEnTareaRepository.findCrewByTaskDto(idTarea);
            return navegantesDto;
        }
        else {throw new SecurityException();}
    }

    @Override
    public boolean altaNaveganteEnTarea(NaveganteEnTareaAltaDto naveganteEnTareaDto, TareaService tareaService) {
        
        if(naveganteService.existeNavegante(naveganteEnTareaDto.getIdNavegante()) && tareaService.existeTarea(naveganteEnTareaDto.getIdTarea())){
            NaveganteEnTarea naveganteEnTarea = dtoMapper.mapFromAltaNaveganteEnTarea(naveganteEnTareaDto, naveganteService, tareaService);
            naveganteEnTareaRepository.save(naveganteEnTarea);
            return true;
        }
        else{return false;}
    }

    @Override
    public boolean bajaNaveganteEnTarea(int idTarea, int idNavegante) {
        
        if(naveganteEnTareaRepository.existsByTaskId(idTarea)){
            naveganteEnTareaRepository.deleteCrewFromTask(idNavegante);
            return true;
        }
        else{return false;}
    }

}
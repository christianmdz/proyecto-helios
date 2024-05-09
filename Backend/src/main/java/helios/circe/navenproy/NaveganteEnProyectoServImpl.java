package helios.circe.navenproy;

import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.NaveganteService;
import helios.circe.navenproy.dto.NaveganteEnProyectoAltaDto;
import helios.circe.navenproy.dto.NaveganteEnProyectoDto;
import helios.circe.proyecto.ProyectoService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteEnProyectoServImpl implements NaveganteEnProyectoService{

    private final DtoMapper dtoMapper;
    private final NaveganteService naveganteService;
    private final NaveganteEnProyectoRepository naveganteEnProyectoRepository;

    @Override
    public List<NaveganteEnProyectoDto> buscarTripulantesEnProyecto(String campo, int idProyecto, ProyectoService proyectoService) {

        if(proyectoService.autorizacionPorCampo(campo, idProyecto)){

            List<NaveganteEnProyectoDto> navegantesDto = naveganteEnProyectoRepository.findCrewByProjectDto(idProyecto);
            return navegantesDto;
        }
        else {throw new SecurityException();}
    }

    @Override
    public boolean altaNaveganteEnProyecto(NaveganteEnProyectoAltaDto naveganteEnProyectoDto, ProyectoService proyectoService) {
        
        if(naveganteService.existeNavegante(naveganteEnProyectoDto.getIdNavegante()) && proyectoService.existeProyecto(naveganteEnProyectoDto.getIdProyecto())){
            NaveganteEnProyecto naveganteEnProyecto = dtoMapper.mapFromAltaNaveganteEnProyecto(naveganteEnProyectoDto, naveganteService, proyectoService);
            naveganteEnProyectoRepository.save(naveganteEnProyecto);
            return true;
        }
        else {return false;}
    }

    @Override
    public boolean bajaNaveganteEnProyecto(int idProyecto, int idNavegante) {
        
        if(naveganteEnProyectoRepository.existsByProjectId(idProyecto)){
            naveganteEnProyectoRepository.deleteCrewFromProject(idNavegante);
            return true;
        }
        else {return false;}
    }
}

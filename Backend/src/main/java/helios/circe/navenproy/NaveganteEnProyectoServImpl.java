package helios.circe.navenproy;

import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.proyecto.ProyectoService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NaveganteEnProyectoServImpl implements NaveganteEnProyectoService{

    private final ProyectoService proyectoService;
    private final NaveganteEnProyectoRepository nepRep;

    @Override
    public List<NaveganteEnProyectoDto> buscarTripulantesEnProyecto(String campo, int idProyecto) {

        if(proyectoService.autorizacionPorCampo(campo, idProyecto)){

            List<NaveganteEnProyectoDto> navegantesDto = nepRep.findCrewByProjectDto(idProyecto);
            return navegantesDto;
        }
        else {throw new SecurityException();}
    }

    @Override
    public NaveganteEnProyecto buscarPorDirector(int idDirector) {
        return null;
    }
    
}

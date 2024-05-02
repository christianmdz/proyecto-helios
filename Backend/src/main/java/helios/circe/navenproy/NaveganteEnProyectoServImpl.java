package helios.circe.navenproy;

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
public class NaveganteEnProyectoServImpl implements NaveganteEnProyectoService{

    private final DtoMapper dtoMapper;
    private final NaveganteEnProyectoRepository nepRep;

    @Override
    public List<NaveganteBaseDto> buscarTripulantesEnProyecto(int idProyecto) {
        
        List<Navegante> navegantes = nepRep.findCrewByProject(idProyecto);
        List<NaveganteBaseDto> navegantesDto = new ArrayList<>();

        for(Navegante navegante : navegantes){
            navegantesDto.add(dtoMapper.mapFromNavegante(navegante, NaveganteAuthDto.class));
        }

        return navegantesDto;
    }

    @Override
    public NaveganteEnProyecto buscarPorDirector(int idDirector) {
        return null;
    }
    
}

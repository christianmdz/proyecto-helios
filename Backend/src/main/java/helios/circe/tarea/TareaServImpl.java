package helios.circe.tarea;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.Campo;
import helios.circe.navegante.NaveganteService;
import helios.circe.tarea.dto.TareaAuthDto;
import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaPublicoDto;
import helios.circe.tarea.dto.TareaRequestDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TareaServImpl implements TareaService {

    private final TareaRepository tareaRepository;
    private final JwtService jwtService;
    private final DtoMapper dtoMapper;
    private final NaveganteService naveganteService;

    @Override
    public List<TareaBaseDto> buscarTodos(String token) {

        String rol = jwtService.getRolFromToken(token);
        List<Tarea> tareas = new ArrayList<>();
        List<TareaBaseDto> listaTareas = new ArrayList<>();

        switch (rol) {
            case "COMANDANTE":
                tareas = tareaRepository.findAll();
                mapearListaTareasADto(tareas, listaTareas, TareaAuthDto.class);
                break;
            case "MANDO":
            case "TRIPULANTE":
                String campo = jwtService.getCampoFromToken(token);
                tareas = buscarPorCampo(campo);
                mapearListaTareasADto(tareas, listaTareas, TareaAuthDto.class);
                break;
            case "COLONO":
                tareas = tareaRepository.findAll();
                mapearListaTareasADto(tareas, listaTareas, TareaPublicoDto.class);
                break;
        }

        return listaTareas;

    }

    private List<Tarea> buscarPorCampo(String campo) {
        Campo enumCampo = Campo.fromString(campo);
        return tareaRepository.findByField(enumCampo);
    }

    // TODO: HIMAR * mapearListaTareasADto

    private void mapearListaTareasADto(List<Tarea> listaTareasOrigen, List<TareaBaseDto> listaTareasDestino,
            Class<? extends TareaBaseDto> dtoClass) {

        for (Tarea tarea : listaTareasOrigen) {
            listaTareasDestino.add(dtoMapper.mapFromTarea(tarea, dtoClass));
        }

    }

    @Override
    public TareaBaseDto buscarPorId(int idTarea) {
        Tarea tarea = tareaRepository.findById(idTarea).orElseThrow();
        TareaAuthDto tareaAuthDto = dtoMapper.mapFromTarea(tarea, TareaAuthDto.class);
        return tareaAuthDto;
    }

    @Override
    public List<Tarea> buscarPorResponsable(String responsable) {
        return tareaRepository.findByManager(responsable);
    }

    // TODO: HIMAR * cambiar tipo de retorno a boolean
    @Override
    public boolean modificarTarea(TareaModificarDto tareaDto) {
        try {
            Tarea tarea = dtoMapper.mapFromModificarTareaDto(tareaDto, naveganteService);
            if (buscarPorId(tarea.getId()) != null) {
                tareaRepository.save(tarea);
                return true;
            } else {
                return false;
            }

        } catch (Exception e) {
            throw new RuntimeException("Error al modificar la tarea");
        }
    }

    // TODO: HIMAR * cambiar tipo de retorno a boolean
    @Override
    public boolean crearTarea(TareaRequestDto tareaRequestDto) {
        try {
            Tarea tarea = dtoMapper.mapFromRequestTareaDto(tareaRequestDto, naveganteService);
            tareaRepository.save(tarea);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}

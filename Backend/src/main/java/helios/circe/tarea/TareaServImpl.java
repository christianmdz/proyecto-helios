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
        List<Tarea> tareas = tareaRepository.findAll();
        List<TareaBaseDto> listaTareas = new ArrayList<>();

        switch (rol) {
            case "COMANDANTE":
                listaTareas = generarListaTareasAuthDto(tareas);
                break;
            case "MANDO":
            case "TRIPULANTE":
                String campo = jwtService.getCampoFromToken(token);
                listaTareas = buscarPorCampo(campo);
                break;
            case "COLONO":
                listaTareas = generarListaTareasPublicoDto(tareas);
                break;
        }

        return listaTareas;

    }

    private List<TareaBaseDto> buscarPorCampo(String campo) {
        Campo enumCampo = Campo.fromString(campo);
        List<Tarea> tareas = tareaRepository.findByField(enumCampo);
        return generarListaTareasAuthDto(tareas);
    }

    private List<TareaBaseDto> generarListaTareasAuthDto(List<Tarea> tareas) {

        List<TareaBaseDto> tareasDto = new ArrayList<>();
        for (Tarea tarea : tareas) {
            tareasDto.add(dtoMapper.mapFromTarea(tarea, TareaAuthDto.class));
        }

        return tareasDto;

    }

    private List<TareaBaseDto> generarListaTareasPublicoDto(List<Tarea> tareas) {

        List<TareaBaseDto> tareasDto = new ArrayList<>();
        for (Tarea tarea : tareas) {
            tareasDto.add(dtoMapper.mapFromTarea(tarea, TareaPublicoDto.class));
        }
        return tareasDto;
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

    // Cambiar con DTOUpdate
    @Override
    public Tarea modificarTarea(TareaModificarDto tareaDto) {
        try {
            Tarea tarea = dtoMapper.mapFromModificarTareaDto(tareaDto, naveganteService);
            if (buscarPorId(tarea.getId()) != null) {
                return tareaRepository.save(tarea);
            } else {
                return null;
            }

        } catch (Exception e) {
            throw new RuntimeException("Error al modificar la tarea");
        }
    }

    @Override
    public Tarea crearTarea(TareaRequestDto tareaRequestDto) {
        try {
            Tarea tarea = dtoMapper.mapFromRequestTareaDto(tareaRequestDto, naveganteService);
            return tareaRepository.save(tarea);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}

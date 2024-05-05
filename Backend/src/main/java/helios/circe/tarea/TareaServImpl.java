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
    private final DtoMapper dtoMapper;
    private final JwtService jwtService;
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
    
    private void mapearListaTareasADto(List<Tarea> listaTareasOrigen, List<TareaBaseDto> listaTareasDestino, Class<? extends TareaBaseDto> dtoClass) {

        for (Tarea tarea : listaTareasOrigen) {
            listaTareasDestino.add(dtoMapper.mapFromTarea(tarea, dtoClass));
        }
    }

    private List<Tarea> buscarPorCampo(String campo) {

        Campo enumCampo = Campo.fromString(campo);
        return tareaRepository.findByField(enumCampo);
    }

    @Override
    public TareaBaseDto buscarPorId(String campo, int idTarea) {

        Tarea tarea = buscarPorId(idTarea);
        TareaAuthDto tareaDto = dtoMapper.mapFromTarea(tarea, TareaAuthDto.class);

        if(autorizacionPorCampo(campo, tareaDto.getCampo())) {return tareaDto;}
        else {return null;}
    }

    private Tarea buscarPorId(int idTarea){
        return tareaRepository.findById(idTarea).orElseThrow();
    }

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

    @Override
    public boolean modificarTarea(String campo, TareaModificarDto tareaDto) {
        if(!autorizacionPorCampo(campo, tareaDto.getCampo())) {return false;}
        try {
            Tarea tarea = dtoMapper.mapFromModificarTareaDto(tareaDto, naveganteService);
            if (buscarPorId(tarea.getId()) != null) {
                tareaRepository.save(tarea);
                return true;
            }
            else {return false;}
        } catch (Exception e) {
            e.printStackTrace(); // TODO: solo para desarrollo : captura en controlador??
            return false;
        }
    }

    @Override
    public boolean autorizacionPorCampo(String campo, int idProyecto){
        Tarea tarea = buscarPorId(idProyecto);
        if(campo.equals("LIDER") || campo.equals(tarea.getCampo().name())) {return true;}
        else {return false;} 
    }

    private boolean autorizacionPorCampo(String campo, String campoTarea) {
        return (campo.equals(campoTarea) || campo.equals("LIDER"));
    }

}

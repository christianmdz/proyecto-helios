package helios.circe.tarea;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import helios.circe.jwt.JwtService;
import helios.circe.mappings.DtoMapper;
import helios.circe.navegante.Campo;
import helios.circe.navegante.NaveganteService;
import helios.circe.naventarea.NaveganteEnTareaService;
import helios.circe.naventarea.dto.NaveganteEnTareaAltaDto;
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
    private final NaveganteEnTareaService naveganteEnTareaService;

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
    public TareaBaseDto detalleTarea(String campo, int idTarea) {

        Tarea tarea = buscarPorId(idTarea);

        if(tarea == null) {
            throw new NoSuchElementException();
        }

        if(!autorizacionPorCampo(campo, tarea.getCampo().name())){
            throw new SecurityException();
        }

        TareaAuthDto tareaDto = dtoMapper.mapFromTarea(tarea, TareaAuthDto.class);

        return tareaDto;
    }
    @Override
    public Tarea buscarPorId(int idTarea){
        return tareaRepository.findById(idTarea).orElseThrow();
    }

    @Override
    public boolean crearTarea(TareaRequestDto tareaRequestDto) {
        try {
            // Alta Tarea
            Tarea tarea = dtoMapper.mapFromRequestTareaDto(tareaRequestDto, naveganteService);
            tarea = altaTarea(tarea);

            // Alta responsable tarea
            NaveganteEnTareaAltaDto naveganteDto = new NaveganteEnTareaAltaDto();
            naveganteDto.setIdNavegante(tarea.getResponsable().getId());
            naveganteDto.setIdTarea(tarea.getId());
            naveganteDto.setFechaIncorporacion(new java.util.Date());
            naveganteDto.setJornada("parcial");
            naveganteDto.setAsignacion("indefinida");
            naveganteEnTareaService.altaNaveganteEnTarea(naveganteDto, this);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private Tarea altaTarea(Tarea tarea){
        return tareaRepository.save(tarea);
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
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean autorizacionPorCampo(String campo, int idTarea){
        Tarea tarea = buscarPorId(idTarea);
        if(campo.equals("LIDER") || campo.equals(tarea.getCampo().name())) {return true;}
        else {return false;} 
    }

    private boolean autorizacionPorCampo(String campo, String campoTarea) {
        return (campo.equals(campoTarea) || campo.equals("LIDER"));
    }

    @Override
    public boolean existeTarea(int idTarea) {
        return tareaRepository.existsById(idTarea);
    }

}

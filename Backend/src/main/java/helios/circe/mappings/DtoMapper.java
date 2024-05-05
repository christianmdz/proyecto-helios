package helios.circe.mappings;

import java.lang.reflect.InvocationTargetException;

import org.springframework.stereotype.Service;

import helios.circe.navegante.Campo;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.NaveganteService;
import helios.circe.navegante.dto.NaveganteAuthDto;
import helios.circe.navegante.dto.NaveganteBaseDto;
import helios.circe.navegante.dto.NavegantePublicoDto;
import helios.circe.proyecto.Proyecto;
import helios.circe.proyecto.dto.ProyectoAuthDto;
import helios.circe.proyecto.dto.ProyectoBaseDto;
import helios.circe.proyecto.dto.ProyectoModificarDto;
import helios.circe.proyecto.dto.ProyectoPublicoDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;
import helios.circe.tarea.Tarea;
import helios.circe.tarea.dto.TareaAuthDto;
import helios.circe.tarea.dto.TareaBaseDto;
import helios.circe.tarea.dto.TareaModificarDto;
import helios.circe.tarea.dto.TareaPublicoDto;
import helios.circe.tarea.dto.TareaRequestDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DtoMapper {

    public <T extends ProyectoBaseDto> T mapFromProyecto(Proyecto proyecto, Class<T> dtoClass) {

        T proyectoDto;

        try {
            proyectoDto = dtoClass.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            throw new RuntimeException("Error al instanciar el objeto ProyectoDto.", e);
        }

        proyectoDto.setId(proyecto.getId());
        proyectoDto.setNombre(proyecto.getNombre());
        proyectoDto.setDirector(proyecto.getDirector().getNombre());

        if (proyectoDto instanceof ProyectoAuthDto) {
            ProyectoAuthDto authDto = (ProyectoAuthDto) proyectoDto;
            authDto.setCampo(proyecto.getCampo().name());
            authDto.setDescripcion(proyecto.getDescripcion());
            authDto.setDirectorEmail(proyecto.getDirector().getEmail());
            authDto.setFechaInicio(proyecto.getFechaInicio());
            authDto.setFechaFin(proyecto.getFechaFin());
            authDto.setEtapa(proyecto.getEtapa());
        }

        if (proyectoDto instanceof ProyectoPublicoDto) {
            ProyectoPublicoDto publicoDto = (ProyectoPublicoDto) proyectoDto;
            publicoDto.setDescripcion(proyecto.getDescripcion());
        }

        return proyectoDto;
    }

    
    public Proyecto mapFromRequestProyectoDto(ProyectoRequestDto proyectoDto, NaveganteService navServ){

        Proyecto proyecto = new Proyecto();
        Navegante navegante = navServ.buscarPorId(proyectoDto.getIdDirector());
        Campo campo = Campo.fromString(proyectoDto.getCampo());

        proyecto.setDirector(navegante);
        proyecto.setCampo(campo);
        proyecto.setNombre(proyectoDto.getNombre());
        proyecto.setDescripcion(proyectoDto.getDescripcion());
        proyecto.setFechaInicio(proyectoDto.getFechaInicio());
        proyecto.setFechaFin(proyectoDto.getFechaFin());
        proyecto.setEtapa(proyectoDto.getEtapa());

        return proyecto;
    }

    public Proyecto mapFromModificarProyectoDto(ProyectoModificarDto proyectoDto, NaveganteService navServ){

        Proyecto proyecto = new Proyecto();
        Navegante navegante = navServ.buscarPorId(proyectoDto.getIdDirector());
        Campo campo = Campo.fromString(proyectoDto.getCampo());

        proyecto.setId(proyectoDto.getId());
        proyecto.setDirector(navegante);
        proyecto.setCampo(campo);
        proyecto.setNombre(proyectoDto.getNombre());
        proyecto.setDescripcion(proyectoDto.getDescripcion());
        proyecto.setFechaInicio(proyectoDto.getFechaInicio());
        proyecto.setFechaFin(proyectoDto.getFechaFin());
        proyecto.setEtapa(proyectoDto.getEtapa());

        return proyecto;
    }

    public <T extends NaveganteBaseDto> T mapFromNavegante(Navegante navegante, Class<T> dtoClass) {

        T naveganteDto;

        try {
            naveganteDto = dtoClass.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            throw new RuntimeException("Error al instanciar el objeto NaveganteDto.", e);
        }

        naveganteDto.setId(navegante.getId());
        naveganteDto.setNombre(navegante.getNombre());

        if (naveganteDto instanceof NaveganteAuthDto) {
            NaveganteAuthDto authDto = (NaveganteAuthDto) naveganteDto;
            authDto.setUsername(navegante.getUsername());
            authDto.setApellido(navegante.getApellido());
            authDto.setEmail(navegante.getEmail());
            authDto.setRol(navegante.getRol().name());
            authDto.setCampo(navegante.getCampo().name());
            authDto.setNave(navegante.getNave().getNombre());
        }

        if (naveganteDto instanceof NavegantePublicoDto) {
            NavegantePublicoDto publicoDto = (NavegantePublicoDto) naveganteDto;
            publicoDto.setApellido(navegante.getApellido());
            publicoDto.setRol(navegante.getRol().name());
            publicoDto.setCampo(navegante.getCampo().name());
            publicoDto.setNave(navegante.getNave().getNombre());
        }

        return naveganteDto;
    }

    public <T extends TareaBaseDto> T mapFromTarea(Tarea tarea, Class<T> dtoClass) {

        T tareaDto;

        try {
            tareaDto = dtoClass.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException
                | NoSuchMethodException e) {
            throw new RuntimeException("Error al instanciar el objeto DTO.", e);
        }

        tareaDto.setId(tarea.getId());
        tareaDto.setNombre(tarea.getNombre());
        tareaDto.setResponsable(tarea.getResponsable().getNombre());

        if (tareaDto instanceof TareaAuthDto) {
            TareaAuthDto tareaAuthDto = (TareaAuthDto) tareaDto;
            tareaAuthDto.setCampo(tarea.getCampo().name());
            tareaAuthDto.setFrecuencia(tarea.getFrecuencia());
            tareaAuthDto.setResponsableEmail(tarea.getResponsable().getEmail());
        }

        if (tareaDto instanceof TareaPublicoDto) {
            TareaPublicoDto tareaPublicoDto = (TareaPublicoDto) tareaDto;
            tareaPublicoDto.setDescripcion(tarea.getDescripcion());
        }

        return tareaDto;
    }

    public Tarea mapFromRequestTareaDto(TareaRequestDto tareaDto, NaveganteService navServ) {

        Tarea tarea = new Tarea();
        Navegante navegante = navServ.buscarPorUsername(tareaDto.getResponsable());
        Campo campo = Campo.fromString(tareaDto.getCampo());

        tarea.setNombre(tareaDto.getNombre());
        tarea.setResponsable(navegante);
        tarea.setCampo(campo);
        tarea.setFrecuencia(tareaDto.getFrecuencia());
        tarea.setDescripcion(tareaDto.getDescripcion());

        return tarea;
    }

    public Tarea mapFromModificarTareaDto(TareaModificarDto tareaDto, NaveganteService navService) {

        Tarea tarea = new Tarea();
        Navegante navegante = navService.buscarPorUsername(tareaDto.getResponsable());
        Campo campo = Campo.fromString(tareaDto.getCampo());

        tarea.setId(tareaDto.getId());
        tarea.setNombre(tareaDto.getNombre());
        tarea.setDescripcion(tareaDto.getDescripcion());
        tarea.setResponsable(navegante);
        tarea.setFrecuencia(tareaDto.getFrecuencia());
        tarea.setCampo(campo);

        return tarea;
    }
}

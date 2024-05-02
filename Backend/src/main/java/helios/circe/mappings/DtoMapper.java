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
import helios.circe.proyecto.dto.ProyectoPublicoDto;
import helios.circe.proyecto.dto.ProyectoRequestDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DtoMapper {

    public <T extends ProyectoBaseDto> T mapFromProyecto(Proyecto proyecto, Class<T> dtoClass) {
        T proyectoDto;
        try {
            proyectoDto = dtoClass.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            throw new RuntimeException("Error al instanciar el objeto DTO.", e);
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

    
    public Proyecto mapFromRequestDto(ProyectoRequestDto proyectoDto, NaveganteService navServ){

        Navegante navegante = navServ.buscarPorUsername(proyectoDto.getDirector());
        Proyecto proyecto = new Proyecto();
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

    
    public <T extends NaveganteBaseDto> T mapFromNavegante(Navegante navegante, Class<T> dtoClass) {
        T naveganteDto;
        try {
            naveganteDto = dtoClass.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            throw new RuntimeException("Error al instanciar el objeto DTO.", e);
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
}


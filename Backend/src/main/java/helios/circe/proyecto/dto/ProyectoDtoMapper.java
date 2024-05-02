package helios.circe.proyecto.dto;

import java.lang.reflect.InvocationTargetException;

import helios.circe.proyecto.Proyecto;

public abstract class ProyectoDtoMapper<T extends ProyectoBaseDto> {
    
    public static <T extends ProyectoBaseDto> T mapFromProyecto(Proyecto proyecto, Class<T> dtoClass) {
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
            ProyectoAuthDto proyectoAuthDto = (ProyectoAuthDto) proyectoDto;
            proyectoAuthDto.setCampo(proyecto.getCampo().name());
            proyectoAuthDto.setDescripcion(proyecto.getDescripcion());
            proyectoAuthDto.setDirectorEmail(proyecto.getDirector().getEmail());
            proyectoAuthDto.setFechaInicio(proyecto.getFechaInicio());
            proyectoAuthDto.setFechaFin(proyecto.getFechaFin());
            proyectoAuthDto.setEtapa(proyecto.getEtapa());
        }
        if(proyectoDto instanceof ProyectoPublicoDto){
            ProyectoPublicoDto proyectoPublicoDto = (ProyectoPublicoDto) proyectoDto;
            proyectoPublicoDto.setDescripcion(proyecto.getDescripcion());
        }

        return proyectoDto;
    }
}


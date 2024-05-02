package helios.circe.navegante.dto;

import java.lang.reflect.InvocationTargetException;

import helios.circe.navegante.Navegante;

public abstract class NaveganteDtoMapper<T extends NaveganteBaseDto> {
    
    public static <T extends NaveganteBaseDto> T mapFromNavegante(Navegante navegante, Class<T> dtoClass) {

        T naveganteDto;

        try {
            naveganteDto = dtoClass.getDeclaredConstructor().newInstance();
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e){
            throw new RuntimeException("Error al instanciar el objeto DTO.", e);
        }

        naveganteDto.setId(navegante.getId());
        naveganteDto.setNombre(navegante.getNombre());

        if (naveganteDto instanceof NavegantePublicoDto){
            NavegantePublicoDto navegantePublicoDto = (NavegantePublicoDto) naveganteDto;
            navegantePublicoDto.setApellido(navegante.getApellido());
            navegantePublicoDto.setRol(navegante.getRol().name());
            navegantePublicoDto.setCampo(navegante.getCampo().name());
            navegantePublicoDto.setNave(navegante.getNave().getNombre());
        }

        return naveganteDto;
    }

}

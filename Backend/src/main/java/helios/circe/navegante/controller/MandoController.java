package helios.circe.navegante.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.jwt.JwtService;
// import helios.circe.mision.MisionService;
// import helios.circe.nave.NaveService;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.NaveganteService;
import helios.circe.proyecto.Proyecto;
import helios.circe.proyecto.ProyectoService;
import helios.circe.tarea.Tarea;
import helios.circe.tarea.TareaService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mando")
@RequiredArgsConstructor
public class MandoController {

    private final JwtService jwtService;
    // private final NaveService naveService;
    // private final MisionService misionService;
    private final NaveganteService naveganteService;
    private final ProyectoService proyectoService;
    private final TareaService tareaService;

    @GetMapping("/info-tripulacion")
    public List<Navegante> informacionTripulacion(HttpServletRequest request){

        String campo = jwtService.getCampoFromRequest(request);
        return naveganteService.buscarPorCampo(campo);
    }

    @GetMapping("/proyectos")
    public List<Proyecto> infromacionProyectos(HttpServletRequest request){

        String campo = jwtService.getCampoFromRequest(request);
        return proyectoService.buscarPorCampo(campo);
    }

    // TODO: probar endpoint
    @GetMapping("/tareas")
    public List<Tarea> informacionTareas(HttpServletRequest request){
        
        String campo = jwtService.getCampoFromRequest(request);
        return tareaService.buscarPorCampo(campo);
    }

}

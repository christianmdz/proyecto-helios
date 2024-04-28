package helios.circe.navegante.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import helios.circe.mision.Mision;
import helios.circe.mision.MisionService;
import helios.circe.nave.Nave;
import helios.circe.nave.NaveService;
import helios.circe.navegante.Navegante;
import helios.circe.navegante.NaveganteService;
import helios.circe.proyecto.Proyecto;
import helios.circe.proyecto.ProyectoService;
import helios.circe.tarea.Tarea;
import helios.circe.tarea.TareaService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/comandante")
@RequiredArgsConstructor
public class ComandanteController {
    
    private final NaveService naveService;
    private final MisionService misionService;
    private final NaveganteService naveganteService;
    private final ProyectoService proyectoService;
    private final TareaService tareaService;

    @GetMapping("/info-nave/{idNave}")
    public Nave informacionNave(@PathVariable int idNave){
        return naveService.buscarUno(idNave);
    }

    @GetMapping("/info-mision/{idMision}")
    public Mision informacionMision(@PathVariable int idMision){
        return misionService.buscarUno(idMision);
    }

    @GetMapping("/info-tripulacion")
    public List<Navegante> informacionTripulacion(){
        return naveganteService.buscarTodos();
    }

    @GetMapping("/tripulante/{idTripulante}")
    public Navegante tripulantePorId(@PathVariable int idTripulante){
        return naveganteService.buscarPorId(idTripulante);
    }

    @GetMapping("/tripulante/username/{username}")
    public Navegante tripulantePorUsername(@PathVariable String username){
        return naveganteService.buscarPorUsername(username);
    }

    @GetMapping("/tripulante/rol/{rol}")
    public List<Navegante> tripulantesPorRol(@PathVariable String rol){
        return naveganteService.buscarPorRol(rol);
    }

    @GetMapping("/tripulante/campo/{campo}")
    public List<Navegante> tripulantePorCampo(@PathVariable String campo){
        return naveganteService.buscarPorCampo(campo);
    }

    @GetMapping("/proyectos")
    public List<Proyecto> informacionProyectos(){
        return proyectoService.buscarTodos();
    }

    @GetMapping("/proyectos/id/{idProyecto}")
    public Proyecto proyectoPorId(@PathVariable int idProyecto){
        return proyectoService.buscarPorId(idProyecto);
    }

    @GetMapping("/proyectos/campo/{campo}")
    public List<Proyecto> informacionProyectosPorCampo(@PathVariable String campo){
        return proyectoService.buscarPorCampo(campo);
    }

    @GetMapping("proyectos/director/{director}")
    public List<Proyecto> informacionProyectosPorDirector(@PathVariable String director){
        return proyectoService.buscarPorDirector(director);
    }

    @GetMapping("/tareas")
    public List<Tarea> informacionTareas(){
        return tareaService.buscarTodos();
    }

    @GetMapping("/tareas/id/{idTarea}")
    public Tarea tareaPorId(@PathVariable int idTarea){
        return tareaService.buscarPorId(idTarea);
    }

    @GetMapping("/tareas/campo/{campo}")
    public List<Tarea> informacionTareasPorCampo(@PathVariable String campo){
        return tareaService.buscarPorCampo(campo);
    }

    @GetMapping("/tareas/responsable/{responsable}")
    public List<Tarea> informacionTareasPorResponsable(@PathVariable String responsable){
        return tareaService.buscarPorResponsable(responsable);
    }

}

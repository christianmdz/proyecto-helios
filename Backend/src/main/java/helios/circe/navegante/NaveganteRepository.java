package helios.circe.navegante;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import helios.circe.proyecto.Proyecto;
import helios.circe.tarea.Tarea;

public interface NaveganteRepository extends JpaRepository<Navegante, Integer>{
    
    Optional<Navegante> findByUsername(String username);

    @Query("select n from Navegante n where n.rol=?1")
    public List<Navegante> findByRole(Role rol);

    @Query("select n from Navegante n where n.campo=?1")
    public List<Navegante> findByField(Campo campo);

    @Query("select P from Proyecto P join NaveganteEnProyecto NP on P.id = NP.proyecto.id where NP.navegante.id = ?1 ")
    public List<Proyecto> findProjectsByCrew(int idCrew);

    @Query("select T from Tarea T join NaveganteEnTarea NT on T.id = NT.tarea.id where NT.navegante.id = ?1 ")
    public List<Tarea> findTasksByCrew(int idCrew);

    @Query("select N from Navegante N where N.rol='ROLE_COMANDANTE' or rol = 'ROLE_MANDO'")
    public List<Navegante> findTopCrew();
}

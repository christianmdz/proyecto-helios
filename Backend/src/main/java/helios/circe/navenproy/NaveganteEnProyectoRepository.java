package helios.circe.navenproy;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import helios.circe.navegante.Navegante;

public interface NaveganteEnProyectoRepository extends JpaRepository<NaveganteEnProyecto, Integer>{
    
    @Query("select n from Navegante n join NaveganteEnProyecto p on n.id = p.navegante.id where p.proyecto.id = ?1")
    public List<Navegante> findCrewByProject(int idProyecto);

    // @Query("select n from NaveganteEnProyecto n where n.director.id")

}

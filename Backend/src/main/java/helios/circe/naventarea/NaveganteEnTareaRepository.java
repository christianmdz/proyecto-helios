package helios.circe.naventarea;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import helios.circe.navegante.Navegante;

public interface NaveganteEnTareaRepository extends JpaRepository<NaveganteEnTarea, Integer> {

    @Query("SELECT n FROM Navegante n join NaveganteEnTarea t on n.id = t.navegante.id where t.tarea.id = ?1")
    public List<Navegante> findCrewByTask(int idTarea);

}

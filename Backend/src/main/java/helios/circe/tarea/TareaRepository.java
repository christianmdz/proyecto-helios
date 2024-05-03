package helios.circe.tarea;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import helios.circe.navegante.Campo;

public interface TareaRepository extends JpaRepository<Tarea, Integer> {

    @Query("select t from Tarea t where t.campo = ?1")
    public List<Tarea> findByField(Campo campo);

    @Query("select t from Tarea t join Navegante n on t.responsable.id = n.id where n.nombre = ?1")
    public List<Tarea> findByManager(String manager);

}

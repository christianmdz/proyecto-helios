package helios.circe.naventarea;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import helios.circe.navegante.Navegante;
import helios.circe.naventarea.dto.NaveganteEnTareaDto;
import jakarta.transaction.Transactional;

public interface NaveganteEnTareaRepository extends JpaRepository<NaveganteEnTarea, Integer> {

    @Query("SELECT n FROM Navegante n join NaveganteEnTarea t on n.id = t.navegante.id where t.tarea.id = ?1")
    public List<Navegante> findCrewByTask(int idTarea);

    @Query("select new helios.circe.naventarea.dto.NaveganteEnTareaDto(N.id, N.nombre, N.apellido, N.username, N.email, N.rol, N.campo, N.nave.id, NT.fechaIncorporacion, NT.jornada, NT.asignacion) " +
    "from Navegante N join NaveganteEnTarea NT on N.id = NT.navegante.id where NT.tarea.id = ?1")
    public List<NaveganteEnTareaDto> findCrewByTaskDto(int idTarea);

    @Transactional
    @Modifying
    @Query("delete from NaveganteEnTarea NT where NT.navegante.id = ?1")
    public void deleteCrewFromTask(int idCrew);

    @Query("select case when count(NT) > 0 then true else false end from NaveganteEnTarea NT where NT.tarea.id = ?1 ")
    public boolean existsByTaskId(int idTask);
}

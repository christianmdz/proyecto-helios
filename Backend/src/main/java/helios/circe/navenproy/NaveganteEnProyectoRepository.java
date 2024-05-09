package helios.circe.navenproy;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import helios.circe.navegante.Navegante;
import helios.circe.navenproy.dto.NaveganteEnProyectoDto;
import jakarta.transaction.Transactional;

public interface NaveganteEnProyectoRepository extends JpaRepository<NaveganteEnProyecto, Integer>{
    
    @Query("select n from Navegante n join NaveganteEnProyecto p on n.id = p.navegante.id where p.proyecto.id = ?1")
    public List<Navegante> findCrewByProject(int idProyecto);

    @Query("select new helios.circe.navenproy.dto.NaveganteEnProyectoDto(N.id, N.nombre, N.apellido, N.username, N.email, N.rol, N.campo, N.nave.id, NP.fechaIncorporacion, NP.diasAsignados) " +
       "from Navegante N join NaveganteEnProyecto NP on N.id = NP.navegante.id where NP.proyecto.id = ?1")
    public List<NaveganteEnProyectoDto> findCrewByProjectDto(int idProject);

    @Transactional
    @Modifying
    @Query("delete from NaveganteEnProyecto NP where NP.navegante.id = ?1")
    public void deleteCrewFromProject(int idCrew);

    @Query("select case when count(NP) > 0 then true else false end from NaveganteEnProyecto NP where NP.proyecto.id = ?1 ")
    public boolean existsByProjectId(int idProject);
}

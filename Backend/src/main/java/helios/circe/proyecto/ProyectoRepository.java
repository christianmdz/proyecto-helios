package helios.circe.proyecto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import helios.circe.navegante.Campo;

public interface ProyectoRepository extends JpaRepository<Proyecto, Integer>{
    
    @Query("select p from Proyecto p where p.campo = ?1")
    public List<Proyecto> findByField(Campo campo);

    @Query("select p from Proyecto p join Navegante n on p.director.id = n.id where n.nombre = ?1")
    public List<Proyecto> findByDirector(String director);

    @Query("select p.campo from Proyecto p where p.id = ?1")
    public Campo getProjectField(int idProyecto);
}

package helios.circe.navegante;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NaveganteRepository extends JpaRepository<Navegante, Integer>{
    
    Optional<Navegante> findByUsername(String username);

    @Query("select n from Navegante n where n.rol=?1")
    public List<Navegante> findByRole(Role rol);

    @Query("select n from Navegante n where n.campo=?1")
    public List<Navegante> findByField(Campo campo);
}

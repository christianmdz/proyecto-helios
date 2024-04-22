package helios.circe.navegante;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NaveganteRepository extends JpaRepository<Navegante, Integer>{
    
    Optional<Navegante> findByUsername(String username);
}

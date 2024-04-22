package helios.circe.nave;

import helios.circe.navegante.Navegante;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "naves")
public class Nave {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    // Una instancia de una entidad (Nave) está asociada con una instancia de otra entidad (Navegante)
    @OneToOne
    @JoinColumn(name = "comandante")
    Navegante comandante;
    
    String nombre;
    int tripulacion;
    String afiliacion;
    String motor;
    int carga;
}

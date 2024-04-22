package helios.circe.navenproy;

import java.util.Date;

import helios.circe.navegante.Navegante;
import helios.circe.proyecto.Proyecto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "navegante_en_proyecto")
public class NaveganteEnProyecto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToOne
    @JoinColumn(name = "id_navegante")
    Navegante navegante;

    @ManyToOne
    @JoinColumn(name = "id_proyecto")
    Proyecto proyecto;

    @Column(name = "fecha_incorporacion")
    Date fechaIncorporacion;

    @Column(name = "dias_asignados")
    int diasAsignados;

}

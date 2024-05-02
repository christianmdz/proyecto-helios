package helios.circe.proyecto;

import java.util.Date;

import helios.circe.navegante.Campo;
import helios.circe.navegante.Navegante;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "proyectos")
public class Proyecto{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @ManyToOne
    @JoinColumn(name = "director")
    Navegante director;

    @Enumerated(EnumType.STRING)
    Campo campo;

    String nombre;
    String descripcion;

    @Column(name = "fecha_inicio")
    Date fechaInicio;
    @Column(name = "fecha_fin")
    Date fechaFin;
    
    String etapa;

}

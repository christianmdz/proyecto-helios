package helios.circe.navegante;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import helios.circe.nave.Nave;
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
@Table(name = "navegantes")
public class Navegante implements UserDetails{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    // Muchas instancias de una entidad (Navegante) están asociadas con una instancia de otra entidad (Nave)
    @ManyToOne
    @JoinColumn(name = "id_nave")
    @JsonIgnore
    Nave nave;

    String username;
    String password;
    String nombre;
    String apellido;
    String email;

    @Enumerated(EnumType.STRING)
    Role rol;
    @Enumerated(EnumType.STRING)
    Campo campo;

    // Devuelve una lista, de un solo elemento, con el rol del navegante
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((rol.name())));
    }

    /*
    * Se implementan estos métodos por contrato de interface
    * El retorno genérico true se debe a que no vamos a utilizar
    * estos métodos para comprobar el status de la cuenta o de 
    * las credenciales de usuario
    * El token JWT ya incluye estos valores, los revisaremos desde
    * JWTService
    */

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
}

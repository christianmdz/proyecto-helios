package helios.circe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import helios.circe.jwt.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
        return http
            .csrf(csrf ->
                csrf.disable()
            )
            .authorizeHttpRequests(authRequest -> 
                authRequest
                    .requestMatchers("/auth/**").permitAll()
                    .requestMatchers("/nave/**").permitAll()
                    .requestMatchers("/comandante/**").hasRole("COMANDANTE")
                    .requestMatchers("/mando/**").hasAnyRole("COMANDANTE", "MANDO")
                    .requestMatchers("/tripulante/**").hasAnyRole("COMANDANTE", "TRIPULANTE")
                    .requestMatchers("/colono/**").hasAnyRole("COMANDANTE", "COLONO")
                    .requestMatchers("/proyectos/**").hasAnyRole("COMANDANTE", "MANDO", "TRIPULANTE", "COLONO")
                    .requestMatchers("/tareas/**").hasAnyRole("COMANDANTE", "MANDO", "TRIPULANTE", "COLONO")
                    .anyRequest().authenticated()
            )
            .sessionManagement(sessionManager ->
                sessionManager
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authProvider)
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }      

}

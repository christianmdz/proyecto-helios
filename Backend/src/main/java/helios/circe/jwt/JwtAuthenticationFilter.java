package helios.circe.jwt;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

/**
 * Clase que gestiona el filtro de autenticación
 * El filtro se ejecuta una vez por petición
 */

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter{

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    /**
     * Cadena de filtros relacionados con el token
     *  filterChain -> cadena de filtros definida en SecurityConfig {securityFilterChain}
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException {
        
        // Se obtiene el token y el username de la petición
        final String token = jwtService.getTokenFromRequest(request);
        final String username;

        // Comprobar existencia del token
        if(token == null){
            // Si no existe en este punto, devuelve el control a la cadena de filtros
            filterChain.doFilter(request, response);
            return;
        }

        // Del token se obtiene el username
        username = jwtService.getUsernameFromTokken(token);

        // Si no encuentra el username en el SecurityContexxtHolder lo busca en la DB
        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
            
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            // Valida el token
            if(jwtService.isTokenValid(token, userDetails)){

                // Si es válido actualiza el SecurityContextHolder
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }

}

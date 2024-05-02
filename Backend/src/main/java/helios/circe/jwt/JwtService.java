package helios.circe.jwt;

import java.util.Date;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import helios.circe.navegante.Navegante;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String SECRET_KEY;

    public String getToken(Navegante navegante){
        return Jwts
            .builder()
            .claim("rol", navegante.getRol().name())
            .claim("campo", navegante.getCampo().name())
            .subject(navegante.getUsername())
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis()+1000*60*60*24))
            .signWith(getKey())
            .compact();
    }

    /**
     * Obtiene el token desde la cabecera de la petición
     * 
     * @param request
     * @return token si existe y es tipo Bearer : null
     */
    public String getTokenFromRequest(HttpServletRequest request){
        
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){ 
            return authHeader.substring(7); 
        }
        return null;
    }

    private Claims getAllClaims(String token){
        return Jwts
            .parser()
            .verifyWith(getKey())
            .build()
            .parseSignedClaims(token)
            .getPayload();
    }

    private SecretKey getKey(){
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public <T> T getClaim(String token, Function<Claims, T> claimResolver){
        final Claims claims = getAllClaims(token);
        return claimResolver.apply(claims);
    }

    public String getUsernameFromTokken(String token) {
        return getClaim(token, Claims::getSubject);
    }

    public String getRolFromToken(String token){
        return getClaim(token, claims -> claims.get("rol", String.class)).substring(5);
    }

    public String getCampoFromToken(String token){
        return getClaim(token, claims -> claims.get("campo", String.class));
    }

    public String getRolFromRequest(HttpServletRequest request){
        String token = getTokenFromRequest(request);
        String rol = getRolFromToken(token);
        return rol;
    }

    public String getCampoFromRequest(HttpServletRequest request){
        String token = getTokenFromRequest(request);
        String campo = getCampoFromToken(token);
        return campo;
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = getUsernameFromTokken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private Date getExpiration(String token){
        return getClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }
    
}

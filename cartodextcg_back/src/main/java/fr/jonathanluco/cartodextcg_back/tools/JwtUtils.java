package fr.jonathanluco.cartodextcg_back.tools;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.*;

@Component
public class JwtUtils {

    private final String SECRETKEY = System.getenv("JWT_SECRET_KEY"); // Remplacez par une clé secrète robuste
    private final long EXPIRATIONTIME = 86400000; // 24 heures

    // Générer un token avec le username et les rôles
    public String generateToken(String username, long userId, Set<String> roles) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("userId", userId);
        claims.put("roles", roles);
        return createToken(claims, username);
    }

    // Créer un token JWT avec les claims
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS256, SECRETKEY)
                .compact();
    }


    // Extraire le username du token
    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    // Extraire tous les claims du token
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRETKEY).parseClaimsJws(token).getBody();
    }

    public boolean validateToken(String token, String username) {
        final String tokenUsername = extractUsername(token);
        return (tokenUsername.equals(username) && !isTokenExpired(token));
    }

    // Vérifier si le token est expiré
    private boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }

    public Set<String> extractRoles(String token) {
        Claims claims = extractAllClaims(token);
        return new HashSet<>((List<String>) claims.get("roles"));
    }
}

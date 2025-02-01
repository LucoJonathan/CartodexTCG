package fr.jonathanluco.cartodextcg_back.controllers;

import fr.jonathanluco.cartodextcg_back.dtos.AuthRequest;
import fr.jonathanluco.cartodextcg_back.services.user.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/auth")
public class AutController {

    @Autowired
    private UserService userService;
    private final Set<String> blacklistedTokens = ConcurrentHashMap.newKeySet();

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        // Authentifier l'utilisateur et obtenir un token JWT
        String token = userService.authenticateUser(authRequest);
        // Retourner le token dans la réponse
        return ResponseEntity.ok(token);
    }

    @PostMapping(value = "/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null && !token.isEmpty()) {
            token = token.substring(7); // Supprimer le préfixe "Bearer " pour obtenir le token brut
            blacklistedTokens.add(token);
            return ResponseEntity.ok("Déconnexion réussie");
        }else {
            return ResponseEntity.status(400).body("Token non valide");
        }
    }

/*    @PostMapping(value = "/register", consumes = "multipart/form-data", produces = "application/json")
    public ResponseEntity<?> register(@ModelAttribute UserDto userDto) {
        try {
            String token = userService.registerUser(userDto);
            return ResponseEntity.ok(token);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }*/
}

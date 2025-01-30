package fr.jonathanluco.cartodextcg_back.dtos;

import lombok.*;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class TokenDto {
    /*Identifiant unique de l'utilisateur*/
    private Long userId;
    /*Username du user*/
    private String username;
    /*Role du User*/
    private Set<String> role;
    /*Type du token utilisé (Bearer pour les API TEST sécurisé)*/
    private String tokenType = "Bearer";
    /*Token JWT utilisé pour accéder aux ressources protégées*/
    private String accessToken;
    /*Token permettant d'obtenir un nouveau accessToken lors de l'expiration*/
    private String refreshToken;
    /*Durée de validité du token d'accès en secondes*/
    private Long expiresIn;
}

package fr.jonathanluco.cartodextcg_back.entities;

import fr.jonathanluco.generic.base.entity.BaseEntity;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User extends BaseEntity {
    @Column(nullable = false)
    private String username;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private String password;

    /*Stocke les rôles sous forme de String en BDD*/
    /*Charge les rôles directement avec l'utilisateur*/
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Enumerated(EnumType.STRING)
    private Set<Roles> roles = new HashSet<>(Set.of(Roles.PUBLIC));

    /*Méthode permettant de vérifier si le user possède un role spécifique*/
    public boolean hasRole(Roles role) {
        return roles.contains(role);
    }

    /*Méthode pour la simplification d'utilisations des roles*/
    public void addRole(Roles role) {
        this.roles.add(role);
    }

    public void removeRole(Roles role) {
        this.roles.remove(role);
    }

    @PrePersist
    public void prePersist() {
        if (roles == null || roles.isEmpty()) {
            roles = new HashSet<>(Set.of(Roles.PUBLIC));  // Initialisation des rôles avant l'insertion
        }
    }


    /*
     *
     *   Add TCG Card
     *
     *   Work in progress !!
     *
     */
}

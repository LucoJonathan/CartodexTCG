package fr.jonathanluco.cartodextcg_back.entities;

import fr.jonathanluco.generic.entity.EntityGeneric;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User extends EntityGeneric {
    @Column(unique = true)
    private String username;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    /*
     *
     *   Add TCG Card
     *
     *   Work in progress !!
     *
     */
}

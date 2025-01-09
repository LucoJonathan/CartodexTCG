package fr.jonathanluco.cartodextcg_back.entities;

import fr.jonathanluco.cartodextcg_back.generic.entity.EntityGeneric;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import lombok.experimental.SuperBuilder;



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

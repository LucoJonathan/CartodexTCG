package fr.jonathanluco.cartodextcg_back.generic.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.io.Serial;
import java.io.Serializable;

/**
 * The type Entity generic.
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public abstract class EntityGeneric{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;

    @Version
    private int version ;
}

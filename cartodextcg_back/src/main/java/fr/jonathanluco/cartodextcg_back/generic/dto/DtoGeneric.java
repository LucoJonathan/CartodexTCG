package fr.jonathanluco.cartodextcg_back.generic.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 * The type Dto generic.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public abstract class DtoGeneric {

    private long id;
    private int version;


}

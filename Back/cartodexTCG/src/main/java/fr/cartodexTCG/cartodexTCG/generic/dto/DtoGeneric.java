package fr.cartodexTCG.cartodexTCG.generic.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;

/**
 * The type Dto generic.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class DtoGeneric implements Serializable {
    private static final long serialVersionUID = 1L;
    private long id;
    private int version;


}

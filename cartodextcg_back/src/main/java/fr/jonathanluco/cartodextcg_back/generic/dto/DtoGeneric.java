package fr.jonathanluco.cartodextcg_back.generic.dto;


import jakarta.persistence.MappedSuperclass;
import lombok.*;

import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@MappedSuperclass
public abstract class DtoGeneric implements Serializable {
    private static final long serialVersionUID = 1L;
    private long id;
    private int version;


}

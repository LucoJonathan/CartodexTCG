package fr.jonathanluco.cartodextcg_back.generic.dto;


import jakarta.persistence.MappedSuperclass;
import lombok.*;

import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
@MappedSuperclass
public abstract class DtoGeneric {

    private long id;
    private int version;


}

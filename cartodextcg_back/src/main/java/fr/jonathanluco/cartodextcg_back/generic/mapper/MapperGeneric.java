package fr.jonathanluco.cartodextcg_back.generic.mapper;


import fr.jonathanluco.cartodextcg_back.generic.dto.DtoGeneric;
import fr.jonathanluco.cartodextcg_back.generic.entity.EntityGeneric;

public interface MapperGeneric<E extends EntityGeneric, D extends DtoGeneric> {

    D toDto(E entity);
    E toEntity(D dto);
}


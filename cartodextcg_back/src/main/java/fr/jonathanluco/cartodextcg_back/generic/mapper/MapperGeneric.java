package fr.jonathanluco.cartodextcg_back.generic.mapper;

public interface MapperGeneric<E, D> {
    D toDto(E entity);

    E toEntity(D dto);
}


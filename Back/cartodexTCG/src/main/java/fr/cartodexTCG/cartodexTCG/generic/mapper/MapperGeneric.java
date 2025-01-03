package fr.cartodexTCG.cartodexTCG.generic.mapper;

public interface MapperGeneric<E,D> {
    D toDto(E entity);
    E toEntity(D dto);
}

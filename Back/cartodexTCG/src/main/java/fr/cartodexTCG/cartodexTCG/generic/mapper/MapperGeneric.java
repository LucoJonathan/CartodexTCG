package fr.cartodexTCG.cartodexTCG.generic.mapper;

public interface MapperGeneric<E,D> {
    D toDto(E e);
    E toEntity(D d);
}

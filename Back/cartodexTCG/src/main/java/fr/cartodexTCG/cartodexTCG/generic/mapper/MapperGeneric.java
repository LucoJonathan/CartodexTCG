package fr.cartodexTCG.cartodexTCG.generic.mapper;

/**
 * The interface Mapper generic.
 *
 * @param <E> the type parameter generic entity
 * @param <D> the type parameter generic dto
 */
public interface MapperGeneric<E,D> {
    /**
     * To dto d.
     *
     * @param entity the entity
     * @return the d
     */
    D toDto(E entity);

    /**
     * To entity e.
     *
     * @param dto the dto
     * @return the e
     */
    E toEntity(D dto);
}

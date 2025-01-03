package fr.cartodexTCG.cartodexTCG.generic.mapper;

import java.util.List;

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

    /**
     * To dto list list.
     *
     * @param entities the entities
     * @return the list
     */
    List<D> toDtoList(List<E> entities);

    /**
     * To entity list list.
     *
     * @param dtos the dtos
     * @return the list
     */
    List<E> toEntityList(List<D> dtos);
}

package fr.cartodexTCG.cartodexTCG.generic.service.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * The interface Service generic.
 *
 * @param <D> the type parameter generic dto
 */
public interface ServiceGeneric<D>{
    /**
     * Save d.
     *
     * @param dto the dto
     * @return the d
     */
    D save(D dto);

    /**
     * Update d.
     *
     * @param dto the dto
     * @return the d
     */
    D update(D dto);

    /**
     * Delete by id.
     *
     * @param id the id
     */
    void deleteById(long id);

    /**
     * Find all list.
     *
     * @return the list
     */
    List<D> findAll();

    /**
     * Find all page.
     *
     * @param pageable the pageable
     * @return the page
     */
    Page<D> findAll(Pageable pageable);
}

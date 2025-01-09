package fr.jonathanluco.cartodextcg_back.generic.service.service;

import jakarta.persistence.MappedSuperclass;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@MappedSuperclass
public interface ServiceGeneric<D>{
    D save(D dto);
    D update(D dto);
    void deleteById(long id);
    List<D> findAll();
    Page<D> findAll(Pageable pageable);
    D getById(long id);
}

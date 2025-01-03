package fr.cartodexTCG.cartodexTCG.generic.service.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ServiceGeneric<D>{
    D save(D dto);
    D update(D dto);
    void delete(D dto);
    List<D> findAll();
    Page<D> findAll(Pageable pageable);
}

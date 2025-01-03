package fr.cartodexTCG.cartodexTCG.generic.service.serviceImpl;

import fr.cartodexTCG.cartodexTCG.generic.mapper.MapperGeneric;
import fr.cartodexTCG.cartodexTCG.generic.service.service.ServiceGeneric;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@RequiredArgsConstructor
public class ServiceImplGeneric<E, D, R extends JpaRepository<E, Long>, M extends MapperGeneric<E, D>> implements ServiceGeneric<D> {
    private final M mapper;
    private final R repository;

    @Override
    public D save(D dto) {
        return mapper.toDto(repository.saveAndFlush(mapper.toEntity(dto)));
    }

    @Override
    public D update(D dto) {
        return mapper.toDto(repository.saveAndFlush(mapper.toEntity(dto)));
    }

    @Override
    public void deleteById(long id) {

        if (!repository.existsById(id)) {
            throw new EntityNotFoundException("Entity with ID " + id + " not found");
        }
        repository.deleteById(id);
    }

    @Override
    public List<D> findAll() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }

    @Override
    public Page<D> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(mapper::toDto);
    }
}

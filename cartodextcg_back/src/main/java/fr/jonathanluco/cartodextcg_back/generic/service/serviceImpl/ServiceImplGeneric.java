package fr.jonathanluco.cartodextcg_back.generic.service.serviceImpl;

import fr.jonathanluco.cartodextcg_back.generic.mapper.MapperGeneric;
import fr.jonathanluco.cartodextcg_back.generic.service.service.ServiceGeneric;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.MappedSuperclass;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@MappedSuperclass
public class ServiceImplGeneric<E, D, R extends JpaRepository<E, Long>, M extends MapperGeneric<E, D>> implements ServiceGeneric<D> {

    protected final M mapper;
    protected final R repository;

    public ServiceImplGeneric(M mapper, R repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

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

    @Override
    public D getById(long id) {
        return mapper.toDto(repository.findById(id).orElseThrow(EntityNotFoundException::new));
    }
}

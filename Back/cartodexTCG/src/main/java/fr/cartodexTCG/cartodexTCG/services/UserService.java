package fr.cartodexTCG.cartodexTCG.services;

import fr.cartodexTCG.cartodexTCG.dtos.UserDto;
import fr.cartodexTCG.cartodexTCG.generic.service.service.ServiceGeneric;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService extends ServiceGeneric<UserDto> {
    @Override
    public UserDto save(UserDto dto);

    @Override
    public UserDto update(UserDto dto);

    @Override
    public void deleteById(long id);

    @Override
    public List<UserDto> findAll() ;

    @Override
    public Page<UserDto> findAll(Pageable pageable);
}

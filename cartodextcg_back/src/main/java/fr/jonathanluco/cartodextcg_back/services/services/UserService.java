package fr.jonathanluco.cartodextcg_back.services.services;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.generic.mapper.MapperGeneric;
import fr.jonathanluco.cartodextcg_back.generic.service.service.ServiceGeneric;
import fr.jonathanluco.cartodextcg_back.mappers.UserMapper;
import fr.jonathanluco.cartodextcg_back.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

/**
 * The interface User service.
 */


public interface UserService extends ServiceGeneric<UserDto> {
    @Override
    UserDto getById(long id);
}

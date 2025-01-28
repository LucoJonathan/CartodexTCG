package fr.jonathanluco.cartodextcg_back.services.services;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;


public interface UserService extends ServiceGeneric<User, UserDto> {
    @Override
    UserDto getById(long id);
}

package fr.jonathanluco.cartodextcg_back.services.services;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.generic.service.service.ServiceGeneric;



public interface UserService extends ServiceGeneric<UserDto> {
    @Override
    UserDto getById(long id);
}

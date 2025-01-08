package fr.jonathanluco.cartodextcg_back.mappers;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.generic.mapper.MapperGeneric;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public abstract class UserMapper implements MapperGeneric<User, UserDto> {

}

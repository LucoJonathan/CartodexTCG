package fr.jonathanluco.cartodextcg_back.mappers;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.generic.mapper.MapperGeneric;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;


@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper extends MapperGeneric<User, UserDto> {
}

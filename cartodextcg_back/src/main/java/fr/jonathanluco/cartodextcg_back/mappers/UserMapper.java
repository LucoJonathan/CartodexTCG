package fr.jonathanluco.cartodextcg_back.mappers;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.generic.mapper.MapperGeneric;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;


@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper extends MapperGeneric<User, UserDto> {

    @Override
    UserDto toDto(User entity);

    @Override
    User toEntity(UserDto dto);
}

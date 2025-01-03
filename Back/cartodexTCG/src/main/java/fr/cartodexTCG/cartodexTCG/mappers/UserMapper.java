package fr.cartodexTCG.cartodexTCG.mappers;

import fr.cartodexTCG.cartodexTCG.dtos.UserDto;
import fr.cartodexTCG.cartodexTCG.entities.User;
import fr.cartodexTCG.cartodexTCG.generic.mapper.MapperGeneric;

public interface UserMapper extends MapperGeneric<User,UserDto> {
    User toEntity(UserDto userDto);
    UserDto toDto(User user);
}

package fr.cartodexTCG.cartodexTCG.mappers;

import fr.cartodexTCG.cartodexTCG.dtos.UserDto;
import fr.cartodexTCG.cartodexTCG.entities.User;
import fr.cartodexTCG.cartodexTCG.generic.mapper.MapperGeneric;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserMapper extends MapperGeneric<User,UserDto> {
}

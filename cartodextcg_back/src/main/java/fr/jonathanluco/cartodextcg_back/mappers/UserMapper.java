package fr.jonathanluco.cartodextcg_back.mappers;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.generic.mapper.MapperGeneric;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserMapper extends MapperGeneric<User,UserDto> {
}

package fr.jonathanluco.cartodextcg_back.services.user;

import fr.jonathanluco.cartodextcg_back.dtos.AuthRequest;
import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.generic.base.services.GenericService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService extends GenericService<UserDto, Long> {
    String authenticateUser(AuthRequest authRequest);
    UserDto loadUserByEmail(String email) throws UsernameNotFoundException;
    UserDto registerUser(UserDto userDto);
}

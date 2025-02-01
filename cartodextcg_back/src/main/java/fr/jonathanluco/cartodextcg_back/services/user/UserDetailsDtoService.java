package fr.jonathanluco.cartodextcg_back.services.user;

import fr.jonathanluco.cartodextcg_back.dtos.UserDetailsDto;
import fr.jonathanluco.generic.base.services.GenericService;


public interface UserDetailsDtoService extends GenericService<UserDetailsDto, Long> {
    UserDetailsDto getUserDetailsDtoById(long id);
}

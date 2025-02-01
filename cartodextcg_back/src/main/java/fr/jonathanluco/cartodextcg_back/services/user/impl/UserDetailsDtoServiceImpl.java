package fr.jonathanluco.cartodextcg_back.services.user.impl;

import fr.jonathanluco.cartodextcg_back.dtos.UserDetailsDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.mappers.user.UserDetailsDtoMapper;
import fr.jonathanluco.cartodextcg_back.repositories.UserDetailsDtoRepository;
import fr.jonathanluco.cartodextcg_back.services.user.UserDetailsDtoService;
import fr.jonathanluco.generic.base.services.GenericServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserDetailsDtoServiceImpl extends GenericServiceImpl<UserDetailsDto, User, UserDetailsDtoRepository, UserDetailsDtoMapper>
        implements UserDetailsDtoService {

    private final UserDetailsDtoRepository userDetailsDtoRepository;

    public UserDetailsDtoServiceImpl(UserDetailsDtoRepository repository, UserDetailsDtoMapper mapper, UserDetailsDtoRepository userDetailsDtoRepository) {
        super(repository, mapper);
        this.userDetailsDtoRepository = userDetailsDtoRepository;
    }


    @Override
    public UserDetailsDto getUserDetailsDtoById(long id) {
        return  mapper.toDto(userDetailsDtoRepository.findUserById(id));
    }
}

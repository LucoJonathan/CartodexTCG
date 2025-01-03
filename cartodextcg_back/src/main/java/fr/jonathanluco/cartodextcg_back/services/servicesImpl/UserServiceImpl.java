package fr.jonathanluco.cartodextcg_back.services.servicesImpl;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.generic.service.serviceImpl.ServiceImplGeneric;
import fr.jonathanluco.cartodextcg_back.mappers.UserMapper;
import fr.jonathanluco.cartodextcg_back.repositories.UserRepository;
import fr.jonathanluco.cartodextcg_back.services.services.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl extends ServiceImplGeneric<User,
        UserDto,
        UserRepository,
        UserMapper>
        implements UserService {

    public UserServiceImpl(UserMapper mapper, UserRepository repository) {
        super(mapper, repository);
    }
}

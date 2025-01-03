package fr.cartodexTCG.cartodexTCG.services.servicesImpl;

import fr.cartodexTCG.cartodexTCG.dtos.UserDto;
import fr.cartodexTCG.cartodexTCG.entities.User;
import fr.cartodexTCG.cartodexTCG.generic.service.serviceImpl.ServiceImplGeneric;
import fr.cartodexTCG.cartodexTCG.mappers.UserMapper;
import fr.cartodexTCG.cartodexTCG.repositories.UserRepository;
import fr.cartodexTCG.cartodexTCG.services.services.UserService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
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

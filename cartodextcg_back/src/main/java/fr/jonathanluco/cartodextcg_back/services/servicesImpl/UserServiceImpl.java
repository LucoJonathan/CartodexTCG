package fr.jonathanluco.cartodextcg_back.services.servicesImpl;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.generic.service.serviceImpl.ServiceImplGeneric;
import fr.jonathanluco.cartodextcg_back.mappers.UserMapper;
import fr.jonathanluco.cartodextcg_back.repositories.UserRepository;
import fr.jonathanluco.cartodextcg_back.services.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImplGeneric<User,
        UserDto,
        UserRepository,
        UserMapper>
        implements UserService {

    public UserServiceImpl(UserMapper mapper, UserRepository repository) {
        super(mapper, repository);
    }

    @Override
    public UserDto getById(long id){
        User entity = this.repository.findById(id);
        System.out.println("Voici l'entité récupérée : " + entity);
        UserDto dto = this.mapper.toDto(entity);
        System.out.println("Voici le DTO retourné : " + dto);
        return dto;
    }
}

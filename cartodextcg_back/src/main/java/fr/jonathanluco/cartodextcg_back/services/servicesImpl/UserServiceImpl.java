package fr.jonathanluco.cartodextcg_back.services.servicesImpl;

import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.mappers.UserMapper;
import fr.jonathanluco.cartodextcg_back.repositories.UserRepository;
import fr.jonathanluco.cartodextcg_back.services.services.UserService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserMapper userMapper;
    private UserRepository userRepository;

    @Override
    public UserDto getById(long id){
        User entity = userRepository.findById(id);
        System.out.println("Voici l'entité récupérée : " + entity);
        UserDto dto = userMapper.toDto(entity);
        System.out.println("Voici le DTO retourné : " + dto);
        return dto;
    }
}

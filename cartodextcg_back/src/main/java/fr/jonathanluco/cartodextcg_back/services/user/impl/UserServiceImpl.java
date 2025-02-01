package fr.jonathanluco.cartodextcg_back.services.user.impl;

import fr.jonathanluco.cartodextcg_back.dtos.AuthRequest;
import fr.jonathanluco.cartodextcg_back.dtos.TokenDto;
import fr.jonathanluco.cartodextcg_back.dtos.UserDto;
import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.cartodextcg_back.mappers.user.UserMapper;
import fr.jonathanluco.cartodextcg_back.repositories.UserRepository;
import fr.jonathanluco.cartodextcg_back.services.PasswordService;
import fr.jonathanluco.cartodextcg_back.services.user.UserService;
import fr.jonathanluco.cartodextcg_back.tools.JwtUtils;
import fr.jonathanluco.generic.base.services.GenericServiceImpl;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserServiceImpl extends GenericServiceImpl<UserDto, User, UserRepository, UserMapper>
        implements UserService {
    private final UserRepository userRepository;
    private final PasswordService passwordService;
    private final JwtUtils jwtUtils;

    public UserServiceImpl(UserRepository repository, UserMapper mapper, UserRepository userRepository, PasswordService passwordService, JwtUtils jwtUtils) {
        super(repository, mapper);
        this.userRepository = userRepository;
        this.passwordService = passwordService;
        this.jwtUtils = jwtUtils;
    }

    public String authenticateUser(AuthRequest authRequest) {
        UserDto dto = loadUserByEmail(authRequest.getEmail());

        // Vérifiez si le mot de passe correspond
        if (!passwordService.verifyPassword(authRequest.getPassword(), dto.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }
        // Créer un TokenDto directement
        TokenDto tokenDto = new TokenDto().builder()
                .userId(dto.getId())
                .username(dto.getUsername())
                .role(dto.getRoles())
                .build();

        // Retourner le token
        return jwtUtils.generateToken(tokenDto.getUsername(), tokenDto.getUserId(), tokenDto.getRole());
    }

    public UserDto loadUserByEmail(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException(email);
        }
        return mapper.toDto(user);
    }

    public UserDto registerUser(UserDto userDto) {
        // Vérifier si l'email est déjà pris
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }
        User user = mapper.toEntity(userDto);
        user.setPassword(passwordService.hashPassword(userDto.getPassword()));
        userRepository.saveAndFlush(user);
        return mapper.toDto(user);
    }
}

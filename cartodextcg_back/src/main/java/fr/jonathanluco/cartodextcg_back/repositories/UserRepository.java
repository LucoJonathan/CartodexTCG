package fr.jonathanluco.cartodextcg_back.repositories;

import fr.jonathanluco.cartodextcg_back.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findById(long id);
}

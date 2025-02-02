package fr.jonathanluco.cartodextcg_back.repositories;

import fr.jonathanluco.cartodextcg_back.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    boolean existsByEmail(String email);
    User findByUsername(String username);
}

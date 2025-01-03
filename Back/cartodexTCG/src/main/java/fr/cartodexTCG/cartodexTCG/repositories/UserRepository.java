package fr.cartodexTCG.cartodexTCG.repositories;

import fr.cartodexTCG.cartodexTCG.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}

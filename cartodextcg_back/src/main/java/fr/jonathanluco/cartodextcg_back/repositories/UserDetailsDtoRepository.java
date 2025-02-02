package fr.jonathanluco.cartodextcg_back.repositories;

import fr.jonathanluco.cartodextcg_back.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsDtoRepository extends JpaRepository<User, Long> {
}

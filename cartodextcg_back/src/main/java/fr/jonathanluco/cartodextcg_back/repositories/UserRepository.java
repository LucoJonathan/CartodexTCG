package fr.jonathanluco.cartodextcg_back.repositories;

import fr.jonathanluco.cartodextcg_back.entities.User;
import fr.jonathanluco.generic.repository.RepositoryGeneric;

public interface UserRepository extends RepositoryGeneric<User> {
    User findById(long id);
}

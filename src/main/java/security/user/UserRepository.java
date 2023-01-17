package security.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	//Optional<User> findByEmail(String email);
	Optional<User> findById(String id);

	Optional<User> findByEmail(String email);
}

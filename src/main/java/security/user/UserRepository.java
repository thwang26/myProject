package security.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	//Optional<User> findByEmail(String email);
	Optional<User> findById(String id);

	Optional<User> findByEmail(String email);
	
	@Query("select id from User u where u.email = :email")
	String findUserEmail(String email);

	@Modifying
	@Transactional
	@Query("update User u set u.password = :password where u.email = :email")
	int changePwd(String email, String password);
}

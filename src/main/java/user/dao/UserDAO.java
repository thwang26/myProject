package user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import user.bean.UserDTO;

@Repository
public interface UserDAO extends JpaRepository<UserDTO, String>{
	
	//첫번째 - 쿼리 메소드
//	public List<UserDTO> findByNameContaining(String keyword);
//	
//	public List<UserDTO> findByIdContaining(String keyword);
	
	//두번째 - @Query 어노테이션
	// ?1는 첫번째 파라미터를 의미한다.
	@Query("select userDTO from UserDTO userDTO where userDTO.name like '%' || :keyword || '%'")// Entity와 대소문자까지 같아야 한다, sql문에서 Entity 를 선언해서 접근
	public List<UserDTO> getUserSearchName(@Param("keyword") String keyword);
	
	@Query("select userDTO from UserDTO userDTO where userDTO.id like '%' || :keyword || '%'")// Entity와 대소문자까지 같아야 한다.
	public List<UserDTO> getUserSearchId(@Param("keyword") String keyword);
}

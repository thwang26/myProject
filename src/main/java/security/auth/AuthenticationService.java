package security.auth;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import security.config.JwtService;
import lombok.RequiredArgsConstructor;
import security.user.Role;
import security.user.User;
import security.user.UserRepository;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	
	public AuthenticationResponse register(RegisterRequest request) {
		var user = User.builder()
			.id(request.getId())
			.name(request.getName())
			.email(request.getEmail())
			.password(passwordEncoder.encode(request.getPassword()))
			.role(Role.USER)
			.build();
		repository.save(user);
		var jwtToken = jwtService.generateToken(user);//user로 토큰 받아오기
		return AuthenticationResponse.builder()
			.token(jwtToken)
			.build();
	}
	
	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
			new UsernamePasswordAuthenticationToken(
					request.getId(),
					request.getPassword()
			)
		);
		var user = repository.findById(request.getId())
			.orElseThrow();
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder()
			.token(jwtToken)
			.build();
	}

	public String isExistId(String id) {
		var existId = repository.findById(id);
		System.out.println(existId);
		if(existId.isEmpty()) return "non_exist";
		else return "exist";
	}
	
	public String isExistEmail(String email) {
		var existEmail = repository.findByEmail(email);
		System.out.println(existEmail);
		if(existEmail.isEmpty()) return "non_exist";
		else return "exist";
	}

}

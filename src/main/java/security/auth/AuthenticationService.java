package security.auth;

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
			.firstname(request.getFirstname())
			.lastname(request.getLastname())
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
}

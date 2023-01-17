package security.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthenticationController {
	
	private final AuthenticationService service;
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
		return ResponseEntity.ok(service.register(request));
	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
		return ResponseEntity.ok(service.authenticate(request));		
	}
	
	@GetMapping("/isExistId")
	public ResponseEntity<String> isExistId(@RequestParam String id) {
		return ResponseEntity.ok(service.isExistId(id));
	}
	
	@GetMapping("/isExistEmail")
	public ResponseEntity<String> isExistEmail(@RequestParam String email) {
		return ResponseEntity.ok(service.isExistEmail(email));
	}
	
	@GetMapping("/findId")
	public ResponseEntity<String> findId(@RequestParam String email) {
		return ResponseEntity.ok(service.findId(email));
	}
	
	@PostMapping("/changePwd")
	public ResponseEntity<String> changePwd(@RequestBody ChangePwdRequest request) {
		System.out.println("email: "+request.getEmail());
		System.out.println("password: "+request.getPassword());
		return ResponseEntity.ok(service.changePwd(request.getEmail(), request.getPassword()));
	}
}

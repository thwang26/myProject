package email.exist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/email")
public class EmailController {
	
	@Autowired
	EmailService emailService;
	
	@PostMapping("/test")
	public String test() {
		System.out.println("test");
		return "test";
	}
	
	@PostMapping("/sendCode")
	public String sendCode(@RequestParam String email) throws Exception {
		System.out.println(email);
		String confirm = emailService.sendSimpleMessage(email);
		return confirm;
	}
	
	@PostMapping("/confirmEmail")
	public String confirmEmail(@RequestParam String verifyCode) throws Exception {
		return emailService.emailVerifyCode(verifyCode);
	}
}

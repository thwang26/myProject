package email.exist;

public interface EmailService {
	String sendSimpleMessage(String to) throws Exception;

	String emailVerifyCode(String verifyCode) throws Exception;
}

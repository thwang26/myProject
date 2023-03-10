//package user.controller;
//
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import jakarta.servlet.http.HttpSession;
//import user.bean.UserDTO;
//import user.service.UserService;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping(value="user")
//public class UserController {
//	@Autowired
//	private UserService userService;
//	
//	@GetMapping(value="getUserList")
//	public List<UserDTO> getUserList(){
//		return userService.getUserList();
//	}
//
//	@PostMapping(value="write")
//	public void write(@ModelAttribute UserDTO userDTO) {
//		userService.write(userDTO);
//	}
//	
//	@PostMapping(value="login")
//	public String login(@ModelAttribute UserDTO userDTO, HttpSession session) {
//		String id = userService.login(userDTO);
//		if(id != null) {session.setAttribute("id", id); return "success";}
//		else return "fail";
//	}
//
//	@GetMapping(value="isExistId")
//	public String isExistId(@RequestParam String id){
//		return userService.isExistId(id);
//	}
//
//	@GetMapping(value="getUser")
//	public Optional<UserDTO> getUser(@RequestParam String id) {
//		return userService.getUser(id);
//	}
//	
//	@PutMapping(value="update")
//	public void update(@ModelAttribute UserDTO userDTO) {
//		userService.update(userDTO);
//	}
//
//	@DeleteMapping(value="delete")
//	public void delete(@RequestParam String id) {
//		userService.delete(id);
//	}
//	
//////	@PostMapping(value="search")
//////	@ResponseBody
//////	public List<UserDTO> search(@RequestParam String search, @RequestParam String keyword) {
//////		return userService.search(search, keyword);
//////	} ??? ????????? ????????? Map?????? ????????? ??? ??? ????????? ??????
////	
//	@GetMapping(value="search")
//	public List<UserDTO> search(@RequestParam Map<String, String> map) { // search, keyword
//		return userService.search(map);
//	}
//}

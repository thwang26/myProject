package main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import user.bean.UserDTO;
import user.service.UserService;

@CrossOrigin(origins = "*")
@Controller
public class MainController {
	@Autowired
	private UserService userService;
	
	@GetMapping(value="/hello")
	@ResponseBody
	public String index() {
		System.out.println("hello react");
		return "Hello React!!";
	}
	
	@GetMapping(value="/home")
	@ResponseBody
	public String home() {
		return "Dream comes true";
	}
	
}

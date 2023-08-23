package com.vathsa.payment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vathsa.payment.model.User;
import com.vathsa.payment.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	private UserRepository repo;


	@GetMapping("/")
	public String home(){
		return "Welcome";
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestParam String email,String password){
		return ResponseEntity.ok(repo.findByEmailAndPassword(email,password));
	}

	@PostMapping("/register")
	public ResponseEntity<User> addUser(@RequestBody User user){
		return ResponseEntity.ok(repo.save(user));
	}

	@GetMapping("/getUser")
	public ResponseEntity<?> getUser(User user){
		return ResponseEntity.ok(repo.findAll());
	}

}

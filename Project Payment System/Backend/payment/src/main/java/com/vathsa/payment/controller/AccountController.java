package com.vathsa.payment.controller;
import com.vathsa.payment.model.Account;
import com.vathsa.payment.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/account")
public class AccountController
{
    @Autowired
    AccountRepository repo;
    @PostMapping("/addAccount")
    public ResponseEntity<Account> addAccount(Account account){
        return ResponseEntity.ok(repo.save(account));
    }
    @PostMapping("/getAccount")
    public ResponseEntity<Account> getAccount(@RequestParam String email){
        return ResponseEntity.ok(repo.findByEmail(email));
    }
}

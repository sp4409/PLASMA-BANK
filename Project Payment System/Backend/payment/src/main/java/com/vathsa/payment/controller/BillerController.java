package com.vathsa.payment.controller;

import com.vathsa.payment.model.Biller;
import com.vathsa.payment.repository.BillerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/biller")
public class BillerController
{
    @Autowired
    BillerRepository repo;

    @PostMapping("/addBiller")
    public ResponseEntity<?> addBiller(Biller biller){
        return ResponseEntity.ok(repo.save(biller));
    }


    @PostMapping("/getBiller")
    public ResponseEntity<?> getBiller(@RequestParam String name){
        return ResponseEntity.ok(repo.findByName(name));
    }

    @PostMapping("/getAllBiller")
    public ResponseEntity<?> getAllBiller(){
        return ResponseEntity.ok(repo.findAll());
    }






}

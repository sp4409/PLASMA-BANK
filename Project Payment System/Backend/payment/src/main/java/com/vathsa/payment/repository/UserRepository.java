package com.vathsa.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vathsa.payment.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByEmailAndPassword(String email, String password);
}

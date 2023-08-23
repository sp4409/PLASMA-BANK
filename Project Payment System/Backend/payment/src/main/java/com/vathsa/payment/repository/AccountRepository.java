package com.vathsa.payment.repository;

import com.vathsa.payment.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends MongoRepository<Account,String>
{

    Account findByEmail(String accNo);
}

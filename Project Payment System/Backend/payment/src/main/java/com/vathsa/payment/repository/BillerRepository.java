package com.vathsa.payment.repository;

import com.vathsa.payment.model.Biller;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillerRepository extends MongoRepository<Biller,String>
{
    Biller findByName(String name);
}

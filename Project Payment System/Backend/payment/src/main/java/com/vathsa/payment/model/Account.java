package com.vathsa.payment.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;


@Setter
@Getter
@AllArgsConstructor
@ToString
@Document(collection = "account")
public class Account
{
    private long accNo;
    private String email;
    private long balance;

}

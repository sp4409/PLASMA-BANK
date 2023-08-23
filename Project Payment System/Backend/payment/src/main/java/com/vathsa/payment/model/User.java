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
@Document(collection = "user")
public class  User {

	private String email;
	private String password;

	private String biller;
	private String autopay;
	private long accNo ;


}

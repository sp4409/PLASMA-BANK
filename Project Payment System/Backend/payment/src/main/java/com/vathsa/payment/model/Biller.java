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
@Document(collection = "biller")
public class Biller
{
    private int id;
    private String name;
    private long consumerNumber;
    private int billAmt;
}

package com.example.stripe_example;

import com.stripe.model.Product;

public class RequestDTO {
    String customerName;
    String customerEmail;


    public String getCustomerName() {
        return customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

}
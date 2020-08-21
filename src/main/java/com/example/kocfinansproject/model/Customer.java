package com.example.kocfinansproject.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

// Customer model and attributes.
public class Customer {

    private UUID customerId ;
    private String customerNationalId ;
    private String customerName;
    private String customerSurname ;
    private int monthlyIncome;
    private String customerPhone ;
    private int creditScore ;  // presumed this data comes from another service. (customer credit score calculation)

    public Customer(@JsonProperty("customerId") UUID customerId,
                    @JsonProperty("customerNationalId") String customerNationalId,
                    @JsonProperty("customerName") String customerName,
                    @JsonProperty("customerSurname") String customerSurname,
                    @JsonProperty("monthlyIncome") int monthlyIncome,
                    @JsonProperty("customerPhone") String customerPhone,
                    @JsonProperty("creditScore") int creditScore)
                    {
        this.customerId = customerId;
        this.customerNationalId = customerNationalId;
        this.customerName = customerName;
        this.customerSurname = customerSurname;
        this.monthlyIncome = monthlyIncome;
        this.customerPhone = customerPhone;
        this.creditScore = creditScore;
    }

    public UUID getId() {
        return customerId;
    }

    public String getCustomerNationalId() {
        return customerNationalId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getCustomerSurname() {
        return customerSurname;
    }

    public int getMonthlyIncome() {
        return monthlyIncome;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public int getCreditScore() {
        return creditScore;
    }
}

package com.example.kocfinansproject.dao;

import com.example.kocfinansproject.model.Customer;

import java.util.List;
import java.util.UUID;

public interface CustomerDao {

    int insertCustomer(UUID customerId, Customer customer) ;

    default int insertCustomer(Customer customer){
        UUID customerId = UUID.randomUUID();
        return insertCustomer(customerId,customer);
    }

    String checkCustomer(UUID customerId);


    Customer selectCustomerById(UUID customerId);

    List<Customer> selectAllCustomers();
}

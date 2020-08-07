package com.example.kocfinansproject.dao;

import com.example.kocfinansproject.model.Customer;

import java.util.List;
import java.util.UUID;

public interface CustomerDao {

    int insertCustomer(UUID id, Customer customer) ;

    default int insertCustomer(Customer customer){
        UUID id = UUID.randomUUID();
        return insertCustomer(id,customer);
    }

    String checkCustomer(UUID uuid);


    Customer selectCustomerById(UUID id);

    List<Customer> selectAllCustomers();
}

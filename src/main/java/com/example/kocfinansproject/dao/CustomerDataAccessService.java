package com.example.kocfinansproject.dao;

import com.example.kocfinansproject.model.Customer;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("postgres")
public class CustomerDataAccessService implements CustomerDao {


    @Override
    public int insertCustomer(UUID customerId, Customer customer) {
        return 0;
    }

    @Override
    public String checkCustomer(UUID customerId) {
        return null;
    }

    @Override
    public Customer selectCustomerById(UUID customerId) {
        return null;
    }

    @Override
    public List<Customer> selectAllCustomers() {
        return List.of(new Customer(UUID.randomUUID(),
                "12345",
                "FROM POSTGRES NAME",
                "FROM POSTGRES SURNAME",
                4500,
                "55412345",
                752));
    }
}

package com.example.kocfinansproject.service;

import com.example.kocfinansproject.dao.CustomerDao;
import com.example.kocfinansproject.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerService {

    private final CustomerDao customerDao ;

    @Autowired
    public CustomerService(@Qualifier("postgres") CustomerDao customerDao){
        this.customerDao = customerDao ;
    }

    public int addCustomer(Customer customer){
        return customerDao.insertCustomer(customer);
    }

    public String checkCustomer(UUID customerId){
        return customerDao.checkCustomer(customerId);
    }

    public Customer getCustomerById(UUID customerId){
        return customerDao.selectCustomerById(customerId);
    }

    public List<Customer> getAllCustomers(){
        return customerDao.selectAllCustomers();
    }



}

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
    public CustomerService(@Qualifier("fakeDao") CustomerDao customerDao){
        this.customerDao = customerDao ;
    }

    public int addCustomer(Customer customer){
        return customerDao.insertCustomer(customer);
    }

    public String checkCustomer(UUID uuid){
        return customerDao.checkCustomer(uuid);
    }

    public Customer getCustomerById(UUID id){
        return customerDao.selectCustomerById(id);
    }

    public List<Customer> getAllCustomers(){
        return customerDao.selectAllCustomers();
    }



}

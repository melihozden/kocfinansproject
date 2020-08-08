package com.example.kocfinansproject.api;

import com.example.kocfinansproject.model.Customer;
import com.example.kocfinansproject.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/customer")
@RestController
public class CustomerController {


    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService){
        this.customerService = customerService ;
    }

    // to add customer to db
    // adding is a post request
    @PostMapping
    public String addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
        return "Customer Added" ;
    }

    @GetMapping("/{id}")
    public String checkCustomer(@PathVariable("id") UUID customerId){
        return customerService.checkCustomer(customerId);
    }

    @GetMapping("/select/{id}")
    public Customer getCustomerById(@PathVariable("id") UUID customerId, Customer customer){
        return customerService.getCustomerById(customerId);
    }

    @GetMapping("/getall")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    // to check customer can take credit
    // checking credit is get request
    //@GetMapping
   /* public boolean checkCustomer(Customer customer){
        return true ;
    }
    */



}

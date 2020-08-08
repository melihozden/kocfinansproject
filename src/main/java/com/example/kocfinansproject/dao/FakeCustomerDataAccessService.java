package com.example.kocfinansproject.dao;

import com.example.kocfinansproject.model.Customer;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

//import io.github.cdimascio.dotenv.Dotenv;

@Repository("fakeDao")
public class FakeCustomerDataAccessService implements CustomerDao {

    private final int KREDI_LIMIT_CARPANI = 4 ;

    private static List<Customer> customerList = new ArrayList<>();

    // for insert people to check they can take credit
    @Override
    public int insertCustomer(UUID customerId, Customer customer) {
        customerList.add(new Customer(customerId,customer.getCustomerNationalId(),customer.getCustomerName(),customer.getCustomerSurname(),customer.getMonthlyIncome(),customer.getCustomerPhone(),customer.getCreditScore()));
        return 1;
    }

    @Override
    public String checkCustomer(UUID customerId) {
        Customer customer = selectCustomerById(customerId);
        String lastDecision = "Name of "+ customer.getCustomerName() + " and surname of "+ customer.getCustomerSurname()  ;

        if(customer.getCreditScore() < 500){
            return lastDecision + " your credit demand has been refused.";
        }
        else if(customer.getCreditScore() >= 500 && customer.getCreditScore() < 1000 && customer.getMonthlyIncome() < 5000){
            return lastDecision + " your credit has been evaluated and transfered 10000₺ to your account";
        }
        else if(customer.getCreditScore() >= 1000){
            return lastDecision + " your credit has been evaluated and transfered" + customer.getMonthlyIncome()*KREDI_LIMIT_CARPANI + "to your account";
        }
        else{
            return "Unknown Error";
        }
    }

    @Override
    public Customer selectCustomerById(UUID customerId) {
        return customerList.get(0);
    }

    @Override
    public List<Customer> selectAllCustomers() {
        return customerList;
    }

}


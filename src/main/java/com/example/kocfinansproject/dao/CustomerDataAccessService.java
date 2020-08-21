package com.example.kocfinansproject.dao;

import com.example.kocfinansproject.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("postgres")
public class CustomerDataAccessService implements CustomerDao {

    private final JdbcTemplate jdbcTemplate;
    private final int KREDI_LIMIT_CARPANI = 4 ; // could be more reasonable if read from text file

    @Autowired
    public CustomerDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertCustomer(UUID customerId, Customer customer) {

        String sql = "INSERT INTO customer(customerid,customernationalid,customername,customersurname,monthlyincome,customerphone,creditscore) VALUES (?,?,?,?,?,?,?)";

        return jdbcTemplate.update(
                sql,
                customerId,
                customer.getCustomerNationalId(),
                customer.getCustomerName(),
                customer.getCustomerSurname(),
                customer.getMonthlyIncome(),
                customer.getCustomerPhone(),
                customer.getCreditScore());
    }

    @Override
    public String checkCustomer(UUID customerId) {

        Customer customer = selectCustomerById(customerId);
        String lastDecision = "Dear " + customer.getCustomerName() + " " + customer.getCustomerSurname()  ;
        String sql = "INSERT INTO application(customerid,customernationalid,transferedmoney) VALUES (?,?,?)";

        // no insert
        if(customer.getCreditScore() < 500){
            return lastDecision + " your credit demand has been refused.";
        }
        else if(customer.getCreditScore() >= 500 && customer.getCreditScore() < 1000 && customer.getMonthlyIncome() < 5000){
            // insert 10000₺ to application table


            jdbcTemplate.update(
                    sql,
                    customerId,
                    customer.getCustomerNationalId(),
                    10000);

            return lastDecision + " your credit has been evaluated and transfered 10000₺ to your account";
        }

        else if(customer.getCreditScore() >= 1000){

            // insert money which calculated to application table
            jdbcTemplate.update(
                    sql,
                    customerId,
                    customer.getCustomerNationalId(),
                    customer.getMonthlyIncome() * KREDI_LIMIT_CARPANI);

            return lastDecision + " your credit has been evaluated and transfered " + customer.getMonthlyIncome() * KREDI_LIMIT_CARPANI + " to your account";
        }
        // no logic for customer creditScore >=500 && <1000 && monthlyIncome > 5000
        else{
            return "Unknown Error";
        }
    }

    @Override
    public Customer selectCustomerById(UUID customerId) {

        String sql = "SELECT customerid,customernationalid,customername,customersurname,monthlyincome,customerphone,creditscore from customer WHERE customerid = ?";
        return jdbcTemplate.queryForObject(sql,new Object[]{customerId} ,(resultSet, i) -> {
            UUID customerid = UUID.fromString(resultSet.getString("customerid"));
            String nationalId = resultSet.getString("customernationalid");
            String name = resultSet.getString("customername");
            String surname = resultSet.getString("customersurname");
            int monthlyIncome = resultSet.getInt("monthlyincome");
            String phone = resultSet.getString("customerphone");
            int creditScore = resultSet.getInt("creditscore");

            return new Customer(customerid, nationalId, name, surname, monthlyIncome, phone, creditScore);
        });
    }


    @Override
    public List<Customer> selectAllCustomers() {

        String sql = "SELECT customerid,customernationalid,customername,customersurname,monthlyincome,customerphone,creditscore from customer";

        return jdbcTemplate.query(sql, (resultSet,i) -> {
            UUID id = UUID.fromString(resultSet.getString("customerid"));
            String nationalId = resultSet.getString("customernationalid");
            String name = resultSet.getString("customername");
            String surname = resultSet.getString("customersurname");
            int monthlyIncome = resultSet.getInt("monthlyincome");
            String phone = resultSet.getString("customerphone");
            int creditScore = resultSet.getInt("creditscore");
            return new Customer(id,nationalId,name,surname,monthlyIncome,phone,creditScore);
        });
    }
}

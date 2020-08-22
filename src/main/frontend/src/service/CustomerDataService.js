import axios from 'axios';

const URI = "http://localhost:8080/api/customer";

class CustomerDataService{

    // Fetch All Customers..
    fetchAllCustomers(){

        return  axios.get(`${URI}/getall`);
    }

    // Add New Customer..
    addNewCustomer(customerNationalId,customerName,customerSurname,customerPhone,monthlyIncome,creditScore){
       return  axios.post(`${URI}`,{
            customerNationalId:customerNationalId,
            customerName:customerName,
            customerSurname:customerSurname,
            monthlyIncome:monthlyIncome,
            customerPhone:customerPhone,
            creditScore: creditScore
       })
    }


}

export default new CustomerDataService;
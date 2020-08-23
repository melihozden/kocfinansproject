import React, { Component } from 'react';
import {Button, Form, Table } from 'semantic-ui-react'

import Error from '../components/Error/Error'
import CustomerDataService from '../service/CustomerDataService'

class SearchPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            customers : [],
            customerData : null,
            isVisibleAll : false,
            isVisibleOne: false,
            errorMessage: ''
        }
     };

     handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
       });
      }

   handleSubmit = (e) =>{
      CustomerDataService.selectCustomerById(this.state.customerId)
      .then((res)=>{
         this.setState({
            customerData:res.data,
            isVisibleOne:true,
            isVisibleAll:false,
            errorMessage:''
         })
         console.log(this.state.customerData)
      })
      .catch((err) =>{
         this.setState({
            errorMessage: `Customer didn't find`,
            isVisibleAll:false,
            isVisibleOne:false,
         })
         console.log(`Customer couldn't find. ERROR : ${err}`)
      })
      //  console.log({...this.state})
    e.preventDefault();
   }

   onClick = () =>{
      CustomerDataService.fetchAllCustomers()
      .then((res)=>{
         this.setState({
            customers:res.data,
            isVisibleAll: true,
            isVisibleOne:false,
            errorMessage:''
         })
      })
      .catch((err) =>{
         console.log(`Customers couldn't find. ERROR : ${err}`)
      })
      console.log({...this.state})
   }

   giveCredit = (id) =>{
      if(window.confirm('Do you want to give credit to this Customer?')){
         CustomerDataService.checkCustomer(id)
         .then((res)=>{
            console.log(res.data)
         })
         .catch((err)=>{
            console.log(`ERROR: ${err}`)
         })
         
         console.log("Credit has given...");
      }
      else{
         console.log("Cancelled...");
      }
      console.log(`Customer give credit clicked = ${id}`)
   }
/*
   deleteCustomer = (id) =>{
      console.log("Give Credit button clicked")
   }
*/
     render() {
        return (
           <div>
           <div className="form-out">
              <p className="title">Customer Fetching</p>
              <div>
              <Form onSubmit={this.handleSubmit}>
               <Form.Field>
                  <input name="customerId" placeholder='Customer ID' className="name-input mt" value={this.state.customerId} onChange={this.handleChange} />
               </Form.Field>
               <Button type='submit' color="green" className="add-button">Fetch Customer</Button>
            </Form>
               <Button onClick={this.onClick} color="brown" className="search-button">Fetch All Customers</Button>
              </div>
             </div>
            <div className="table-div">
               {
                  this.state.errorMessage && <Error />
               }
               {
                  this.state.isVisibleAll &&
            <Table basic="very" celled collapsing>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>UID</Table.HeaderCell>
                     <Table.HeaderCell>Customer National ID</Table.HeaderCell>
                     <Table.HeaderCell>Customer First Name</Table.HeaderCell>
                     <Table.HeaderCell>Customer Last Name</Table.HeaderCell>
                     <Table.HeaderCell>Customer Phone Number</Table.HeaderCell>
                     <Table.HeaderCell>Customer Income</Table.HeaderCell>
                     <Table.HeaderCell>Customer Credit Score</Table.HeaderCell>
                  </Table.Row>
               </Table.Header>

               <Table.Body>
                  {
                     this.state.customers.map(
                        customer => 
                        <Table.Row key={customer.id}>
                           <Table.Cell>{customer.id}</Table.Cell>
                           <Table.Cell>{customer.customerNationalId}</Table.Cell>
                           <Table.Cell>{customer.customerName}</Table.Cell>
                           <Table.Cell>{customer.customerSurname}</Table.Cell>
                           <Table.Cell>{customer.customerPhone}</Table.Cell>
                           <Table.Cell>{customer.monthlyIncome}₺</Table.Cell>
                           <Table.Cell>{customer.creditScore}</Table.Cell>
                           <Table.Cell><Button color="blue" onClick={() => this.giveCredit(customer.id)}>Give Credit</Button></Table.Cell>
                           {/* <Table.Cell><Button color="red" onClick={() => this.deleteCustomer(customer.id)}>Delete Customer</Button></Table.Cell> */}
                         </Table.Row>
                     )
                  }
               </Table.Body>
            </Table>
         }
          {
                  this.state.isVisibleOne &&
            <Table basic="very" celled collapsing>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>UID</Table.HeaderCell>
                     <Table.HeaderCell>Customer National ID</Table.HeaderCell>
                     <Table.HeaderCell>Customer First Name</Table.HeaderCell>
                     <Table.HeaderCell>Customer Last Name</Table.HeaderCell>
                     <Table.HeaderCell>Customer Phone Number</Table.HeaderCell>
                     <Table.HeaderCell>Customer Income</Table.HeaderCell>
                     <Table.HeaderCell>Customer Credit Score</Table.HeaderCell>
                  </Table.Row>
               </Table.Header>

               <Table.Body>
                  {
                        <Table.Row key={this.state.customerData.id}>
                           <Table.Cell>{this.state.customerData.id}</Table.Cell>
                           <Table.Cell>{this.state.customerData.customerNationalId}</Table.Cell>
                           <Table.Cell>{this.state.customerData.customerName}</Table.Cell>
                           <Table.Cell>{this.state.customerData.customerSurname}</Table.Cell>
                           <Table.Cell>{this.state.customerData.customerPhone}</Table.Cell>
                           <Table.Cell>{this.state.customerData.monthlyIncome}$</Table.Cell>
                           <Table.Cell>{this.state.customerData.creditScore}</Table.Cell>
                           <Table.Cell><Button color="blue" onClick={() => this.giveCredit(this.state.customerData.id)}>Give Credit</Button></Table.Cell>
                           <Table.Cell><Button color="red" onClick={() => this.deleteCustomer(this.state.customerData.id)}>Delete Customer</Button></Table.Cell>
                         </Table.Row>
                  }
               </Table.Body>
            </Table>
         }
            </div>

               <h4 className="footer">This project made with ❤️ by <span className="bold">Melih Özden</span></h4>
           </div>
        );
     }
  }

 
export default SearchPage;
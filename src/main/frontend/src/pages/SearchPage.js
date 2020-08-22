import React, { Component } from 'react';
import {Button, Form, Table } from 'semantic-ui-react'

import CustomerDataService from '../service/CustomerDataService'

class SearchPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            customers : [],
            isVisible : false
        }
     };

     handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
       });
      }

   handleSubmit = (e) =>{
    console.log({...this.state})
    e.preventDefault();
   }

   onClick = () =>{
      CustomerDataService.fetchAllCustomers()
      .then((res)=>{
         this.setState({
            customers:res.data,
            isVisible: true
         })
         console.log({...this.state})
      })
   }

   giveCredit = (id) =>{
      console.log(`Customer give credit clicked = ${id}`)
   }

   deleteCustomer = (id) =>{
      console.log("Give Credit button clicked")
   }

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
                  this.state.isVisible &&
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
                           <Table.Cell>{customer.monthlyIncome}$</Table.Cell>
                           <Table.Cell>{customer.creditScore}</Table.Cell>
                           <Table.Cell><Button color="blue" onClick={() => this.giveCredit(customer.id)}>Give Credit</Button></Table.Cell>
                           <Table.Cell><Button color="red" onClick={() => this.deleteCustomer(customer.id)}>Delete Customer</Button></Table.Cell>
                         </Table.Row>
                     )
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
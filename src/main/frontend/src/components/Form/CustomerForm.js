import React, { Component } from 'react';
import '../Form/CustomerForm.css';
import CustomerDataService from '../../service/CustomerDataService'

import {Button, Form, Message } from 'semantic-ui-react'

class CustomerForm extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            customerNationalId: '',
            customerName: '',
            customerSurname: '',
            monthlyIncome: '',
            customerPhone: '',
            creditScore: '',
            resultMessage:'',
        }
     };

     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
         });
     }

     handleSubmit = (e) =>{
      CustomerDataService.addNewCustomer(
         this.state.customerNationalId,
         this.state.customerName,
         this.state.customerSurname,
         this.state.customerPhone,
         this.state.monthlyIncome,
         this.state.creditScore
         )
         .then((res) =>{
            this.setState({
               resultMessage: res.data 
            })
         })
      e.preventDefault();
     }

     componentDidUpdate(){
        setTimeout(() => {
            this.setState({resultMessage:''})
        }, 10000);
     }

     render() {
        return (
           <div>
           <div className="form-out">
              <p className="title">Customer Adding</p>
              <Form onSubmit={this.handleSubmit}>
               <Form.Field>
                  <input required name="customerName" placeholder='First Name' className="name-input mt" value={this.state.customerName} onChange={this.handleChange} />
               </Form.Field>
               <Form.Field>
                  <input required name="customerSurname" placeholder='Last Name' className="name-input" value={this.state.customerSurname}  onChange={this.handleChange}/>
               </Form.Field>
               <Form.Field>
                  <input required  name="customerNationalId" placeholder='National ID' className="name-input" value={this.state.customerNationalId} onChange={this.handleChange} />
               </Form.Field>
               <Form.Field>
                  <input required name="customerPhone" placeholder='Phone Number' type="number" className="name-input" value={this.state.customerPhone} onChange={this.handleChange} />
               </Form.Field>
               <Form.Field>
                  <input required name="monthlyIncome" placeholder='Monthly Income' type="number" className="name-input"  value={this.state.monthlyIncome} onChange={this.handleChange}/>
               </Form.Field>
                <Form.Field>
                  <input required name="creditScore" placeholder='Credit Score' type="number" className="name-input" value={this.state.creditScore} onChange={this.handleChange} />
               </Form.Field>
               <Button type='submit' color="green" className="add-button">Add Customer</Button>
               <Button color="brown" className="search-button"><a href="/search" className="anchor">Search Customer</a></Button>
            </Form>
             </div>
            {  this.state.resultMessage &&
               <div className="resultMessage">
                  <Message color="green">{this.state.resultMessage}</Message>
               </div>
            }
               <h4 className="footer">This project made with ❤️ by <span className="bold">Melih Özden</span></h4>
           </div>
        );
     }
  }

 
export default CustomerForm;
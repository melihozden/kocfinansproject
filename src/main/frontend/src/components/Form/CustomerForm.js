import React, { Component } from 'react';
import '../Form/CustomerForm.css';

import {Button, Form } from 'semantic-ui-react'

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

     render() {
        return (
           <div>
           <div className="form-out">
              <p className="title">Customer Adding</p>
              <Form onSubmit={this.handleSubmit}>
               <Form.Field>
                  <input name="customerName" placeholder='First Name' className="name-input mt" value={this.state.customerName} onChange={this.handleChange} />
               </Form.Field>
               <Form.Field>
                  <input name="customerSurname" placeholder='Last Name' className="name-input" value={this.state.customerSurname}  onChange={this.handleChange}/>
               </Form.Field>
               <Form.Field>
                  <input name="customerNationalId" placeholder='National ID' className="name-input" value={this.state.customerNationalId} onChange={this.handleChange} />
               </Form.Field>
               <Form.Field>
                  <input name="customerPhone" placeholder='Phone Number' type="number" className="name-input" value={this.state.customerPhone} onChange={this.handleChange} />
               </Form.Field>
               <Form.Field>
                  <input name="monthlyIncome" placeholder='Monthly Income' type="number" className="name-input"  value={this.state.monthlyIncome} onChange={this.handleChange}/>
               </Form.Field>
                <Form.Field>
                  <input name="creditScore" placeholder='Credit Score' type="number" className="name-input" value={this.state.creditScore} onChange={this.handleChange} />
               </Form.Field>
               <Button type='submit' color="green" className="add-button">Add Customer</Button>
               <Button color="brown" className="search-button"><a href="/search" className="anchor">Search Customer</a></Button>
            </Form>
             </div>
               <h4 className="footer">This project made with ❤️ by <span className="bold">Melih Özden</span></h4>
           </div>
        );
     }
  }

 
export default CustomerForm;
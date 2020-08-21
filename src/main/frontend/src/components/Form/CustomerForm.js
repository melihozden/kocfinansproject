import React, { Component } from 'react';
import '../Form/CustomerForm.css';

import { Container, Button, Checkbox, Form } from 'semantic-ui-react'

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
     updateState = (e) => {
        this.setState({data: e.target.value});
     }
     render() {
        return (
           <div>
           <div className="form-out">
              <p className="title">Customer Adding</p>
              <Form>
               <Form.Field>
                  <input placeholder='First Name' className="name-input mt" />
               </Form.Field>
               <Form.Field>
                  <input placeholder='Last Name' className="name-input" />
               </Form.Field>
               <Form.Field>
                  <input placeholder='National ID' className="name-input" />
               </Form.Field>
               <Form.Field>
                  <input placeholder='Phone Number' type="number" className="name-input" />
               </Form.Field>
               <Form.Field>
                  <input placeholder='Monthly Income' type="number" className="name-input" />
               </Form.Field>
                <Form.Field>
                  <input placeholder='Credit Score' type="number" className="name-input" />
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
import React, { Component } from 'react';
import {Button, Form } from 'semantic-ui-react'

class SearchPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
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
      console.log("Fetch all clicked.")
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
               <h4 className="footer">This project made with ❤️ by <span className="bold">Melih Özden</span></h4>
           </div>
        );
     }
  }

 
export default SearchPage;
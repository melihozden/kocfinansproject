import React, { Component } from 'react';
import '../Form/Form.css';

class Form extends Component{
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
           <div className="form">
              <input type = "text" value = {this.state.data} 
                 onChange = {this.updateState} className="name-input" />
              <h4>{this.state.data}</h4>
           </div>
        );
     }
  }

 
export default Form;
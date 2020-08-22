import React, { Component } from 'react';

import {Button, Form } from 'semantic-ui-react'
import CustomerForm from '../components/Form/CustomerForm';

class MainPage extends Component{
     render() {
        return (
            <CustomerForm />
        );
     }
  }

 
export default MainPage;
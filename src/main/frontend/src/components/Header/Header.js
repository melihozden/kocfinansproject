import React, { Component } from 'react';
import '../Header/Header.css'
import Logo from '../../img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <img src={Logo} alt=""/>
            </div>
         );
    }
}
 
export default Header;
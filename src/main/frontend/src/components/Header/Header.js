import React, { Component } from 'react';
import '../Header/Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <img src="https://mobilweb.kocfinans.com.tr/images/logo.png" alt=""/>
            </div>
         );
    }
}
 
export default Header;
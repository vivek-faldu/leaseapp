import React, { Component } from 'react';
import './Header.css';
import {  Button, AppBar } from '@material-ui/core';
import logo from '../../images/logo.png';


class Header extends Component {
   constructor(props){
     super();
    
   }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

handleRegister = ()=>{

  this.props.handleSignUp(true)
}

  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">

      <AppBar color='default'>
      <div className="container-fluid">
          <div className="row"> 
              <div className="col">
                    <img src={logo} alt=" " width='80px' height='80px'></img>
              </div>
               <div className="col d-flex align-self-center justify-content-end">
                    <div className="zoom">
                    <Button color="primary" variant="outlined" onClick={this.handleRegister} >Register</Button>
                    </div>
                    <div className="zoom">
                    <Button color="primary" variant="outlined" >Login</Button>
                    </div>
                
            </div>
        </div>
      </div>
      </AppBar>
      </nav>

    );
  }
}

export default Header;

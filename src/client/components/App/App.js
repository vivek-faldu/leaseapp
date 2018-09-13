import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import SignUpDialogBox from '../SignUpDialogBox/SignUpDialogBox'

class App extends Component {

  constructor(props){
    super();
    this.state = {open:false};
  }



  handleSignUp = (action)=>{
    
    this.setState({open:action})
  }

  
   
  render() {
    return (
    
      <div>
     <Header handleSignUp={this.handleSignUp}/><br/><br/><br/><br/><br/><br/>
     <SignUpDialogBox open={this.state.open} handleSignUp={this.handleSignUp}/>
     </div>
    );
  }
}

export default App;

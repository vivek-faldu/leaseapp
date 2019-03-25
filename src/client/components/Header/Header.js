import React, { Component } from "react";
import "./Header.css";
import { Button, AppBar, Paper } from "@material-ui/core";
import logo from "../../images/logo.png";

class Header extends Component {
  constructor(props) {
    super();
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  handleRegister = () => {
    this.props.handleSignUp(true);
  };

  handleLogin = () => {
    this.props.handleLogin(true);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={logo} alt=" " width="300px" height="80px" />
          </div>
          <div className="col d-flex align-self-center justify-content-end">
            <div className="zoom">
              <Button
                color="primary"
                variant="outlined"
                onClick={this.handleRegister}
              >
                Register
              </Button>
            </div>
            <div className="zoom">
              <Button
                color="primary"
                variant="outlined"
                onClick={this.handleLogin}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      // </Paper>
      // <AppBar color="inherit">

      // </AppBar>
    );
  }
}

export default Header;

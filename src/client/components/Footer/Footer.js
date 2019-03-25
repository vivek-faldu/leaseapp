import React, { Component } from "react";
import "./Footer.css";
import { Button, AppBar, Paper } from "@material-ui/core";
import logo from "../../images/logo.png";

class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Paper
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "grey",
          elevation: 5
        }}
      >
        This is footer
      </Paper>
    );
  }
}

export default Footer;

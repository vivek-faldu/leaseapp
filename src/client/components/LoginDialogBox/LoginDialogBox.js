import React, { Component } from "react";
import "./LoginDialogBox.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

class LoginDialogBox extends Component {
  constructor(props) {
    super();
  }

  handleClose = () => {
    this.props.handleLogin(false);
  };
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    //const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
        >
          <DialogTitle id="form-dialog-title" disableTypography={true}>
            <h1>Login</h1>
          </DialogTitle>
          <div className="container-fluid">
            <DialogContent>
              <div className="row justify-content-center">
                <TextField
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className="row justify-content-center">
                <TextField
                  id="password-input"
                  label="Password"
                  //className={classes.textField}
                  type="password"
                  fullWidth
                  autoComplete="current-password"
                  margin="normal"
                />
              </div>
            </DialogContent>
          </div>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginDialogBox;

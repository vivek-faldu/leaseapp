import React, { Component } from 'react';
import './SignUpDialogBox.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';





class SignUpDialogBox extends Component {
   constructor(props){
     super();
     
   }

   handleClose = ()=>{

    this.props.handleSignUp(false)

   }
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
          <DialogTitle id="form-dialog-title" disableTypography={true}> <h1>Register</h1></DialogTitle>
          <div className="container-fluid">
          <DialogContent>

            <div className="row justify-content-center">
            <TextField
              id="fname"
              autoFocus
              label="First Name"
             fullWidth
             // value={this.state.fname}
             // onChange={this.handleChange('fname')}
              margin="normal"
            />
            </div>
            <div className="row justify-content-center">
              <TextField
              id="lname"
              label="Last Name"
              fullWidth
             // value={this.state.lname}
             // onChange={this.handleChange('lname')}
              margin="normal"
              />
            </div>
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

          <div className="container">
            <div className="row">

            <div className="cols-sm">
            <FormControl>
          <InputLabel htmlFor="age-simple">Date</InputLabel>
          <Select
         //   value={this.state.age}
            onChange={this.handleChange}
            autoWidth = {false}
            margin = 'normal'
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        </div>


            <div className="cols-sm">
            <FormControl>
          <InputLabel htmlFor="age-simple">Date</InputLabel>
          <Select
           // value={this.state.age}
            onChange={this.handleChange}
            autoWidth = {false}
            margin = 'normal'
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        </div>


            <div className="cols-sm">
            <FormControl>
          <InputLabel htmlFor="age-simple">Date</InputLabel>
          <Select
         //   value={this.state.age}
            onChange={this.handleChange}
            autoWidth = {false}
            margin = 'normal'
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        </div>
          </div> 
          </div>
          </DialogContent>
          </div>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              SignUp
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default SignUpDialogBox;

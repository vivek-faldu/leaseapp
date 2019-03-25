import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import SignUpDialogBox from "../SignUpDialogBox/SignUpDialogBox";
import LoginDialogBox from "../LoginDialogBox/LoginDialogBox";
import Banner from "../Banner/Banner";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ListingCard from "../ListingCard/ListingCard";
import Footer from "../Footer/Footer";

class App extends Component {
  constructor(props) {
    super();
    this.state = { openSignup: false, openLogin: false };
  }

  handleSignUp = action => {
    this.setState({ openSignup: action });
  };

  handleLogin = action => {
    this.setState({ openLogin: action });
  };

  createCard = () => {
    return [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6].map(x => {
      return (
        <Grid item md={3}>
          <ListingCard />
        </Grid>
      );
    });
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={24}
        >
          <Grid item xs={12}>
            <Header
              handleSignUp={this.handleSignUp}
              handleLogin={this.handleLogin}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: 10
              }}
            >
              <Banner />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              {this.createCard()}
            </Grid>
          </Grid>
        </Grid>

        <SignUpDialogBox
          open={this.state.openSignup}
          handleSignUp={this.handleSignUp}
        />

        <LoginDialogBox
          open={this.state.openLogin}
          handleLogin={this.handleLogin}
        />

        <Footer />
      </div>
    );
  }
}

export default App;

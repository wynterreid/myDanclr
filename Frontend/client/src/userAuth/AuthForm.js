import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Auth from "../utils/Auth";
import Signup from '../Homepage/Routes/signup'
import Login from '../Homepage/Routes/login'


class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    profile_pic:""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    e.preventDefault();
    const { username, password, email , profile_pic} = this.state;

    await axios.post("/users/new", { username, password, email, profile_pic });

    Auth.authenticateUser(username);

    await axios.post("/users/login", { username, password, email });

    await this.props.checkAuthenticateStatus();

    this.setState({
      username: "",
      password: "",
      email: "",
      profile_pic:""
    });
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: "",
        });
      });
  };

  render() {
    const { username, password, email, profile_pic } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => {
            return (
              <Login
                username={username}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
                logoutUser={this.logoutUser}
              />
            );
          }}
        />
        <Route
          path="/auth/register"
          render={() => {
            return (
              <Signup
                username={username}
                password={password}
                email={email}
                profile_pic={profile_pic}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
                logoutUser={this.logoutUser}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default AuthForm;

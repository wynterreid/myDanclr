import React, { Component } from 'react';
import Signup from './Homepage/Routes/signup'
import Login from './Homepage/Routes/login'
import { Route, Switch , Redirect} from 'react-router-dom';
import Homepage from './Homepage/homepage'
import axios from "axios";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";
import {withRouter} from 'react-router';
import Dashboard from './Dashboard/dashboard'
import AuthForm from './userAuth/AuthForm'
import Text from './Dashboard/Creation/text'
import Photo from './Dashboard/Creation/photo'
import UserProfile from './users/Users'
import './App.css'
import './index.css'

class App extends Component {
  state = {
    isLoggedIn: false,
    user: ""
  };

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.post("/users/isLoggedIn").then(user => {
      if (user.data.username === Auth.getToken()) {
        console.log(user.data.username)
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  };

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });

    }

      render() {
        console.log(this.state.isLoggedIn)
        return (
          <Switch>
          <Route exact path='/' component={Homepage}/>
          <PrivateRoute path='/dashboard' component={Dashboard} logoutUser={this.logoutUser} />

          <Route
            path="/auth"
            render={() => {
              if (this.state.isLoggedIn) {
                return <Redirect to = "/dashboard" component={Dashboard}/>
              }
              return (
                <AuthForm
                  checkAuthenticateStatus={this.checkAuthenticateStatus}
                  isLoggedIn={this.state.isLoggedIn}
                />
              );
            }}
          />

          <PrivateRoute path='/text' component={Text}/>
          <PrivateRoute path='/photo' component={Photo}/>
          <PrivateRoute path='/:username' component={UserProfile}/>
        </Switch>
        )
      }
  };

  export default withRouter(App);

import React from "react";
import Header from "../header.js";
import { withRouter } from "react-router";
import TextField from "@material-ui/core/TextField";
import "../HomePageCSS/Login.css";

const Login = ({
  match,
  username,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  const path = match.path;
  return (
    <>
      <Header />
      <div className="quote">
        <h5 className="quoteWord">
          {" "}
          “Dance is the hidden language of the soul.”
        </h5>
        <h6 className="quoteAuthor">-Martha Graham</h6>
      </div>
      <div className="background">
        <form
          className="registerForm"
          onSubmit={path === "/auth/login" ? loginUser : registerUser}
        >
          <TextField
            id="item"
            label="Username"
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
          />
          <TextField
            id="item"
            label="Password"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
          <button className="submitbutton" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default withRouter(Login);

import React from "react";
import Header from "../header";
import Main from "../main";
import { withRouter } from "react-router";
import TextField from "@material-ui/core/TextField";
import "../HomePageCSS/SignUp.css";

const Signup = ({
  match,
  username,
  password,
  email,
  profile_pic,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange
}) => {
  const path = match.path;
  return (
    <>
      <Main />

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
        <TextField
          id="item"
          label="Email"
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="item"
          label="Profile Picture"
          type="text"
          value={profile_pic}
          name="profile_pic"
          onChange={handleChange}
        />
        <button className="submitbutton" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default withRouter(Signup);

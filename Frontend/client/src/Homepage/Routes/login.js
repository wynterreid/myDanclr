import React from "react";
import Header from '../header.js';
import { withRouter } from "react-router";

const Login = (
{match, username,
password,
isLoggedIn,
loginUser,
registerUser,
handleChange
}) => {
  const path = match.path;
  return(
    <>
  <Header/>
    <h1 className="title">Danclr</h1>
    <div className="loginForm">
    <form onSubmit={path === "/auth/login" ? loginUser : registerUser}>
      <input className="loginForm"
        type="text"
        value={username}
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      <input className="loginForm"
        type="password"
        value={password}
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button type="submit">Sign In</button>
    </form>
    </div>
    </>
  )
}

export default withRouter (Login);

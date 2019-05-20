import React from "react";
import Header from '../header';
import Main from '../main';
import { withRouter } from 'react-router';

const Signup = (
  {match, username,
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
  <Header/>
  <Main/>
  <div className="SignUpInfo">
  <form onSubmit={path === "/auth/login" ? loginUser : registerUser}>
  <input
    type="text"
    value={username}
    name="username"
    placeholder="username"
    onChange={handleChange}
  />
  <input
    type="password"
    value={password}
    name="password"
    placeholder="password"
    onChange={handleChange}
  />
  <input
    type="text"
    value={email}
    name="email"
    placeholder="Email"
    onChange={handleChange}
  />
  <input
    type="text"
    value={profile_pic}
    name="profile_pic"
    placeholder="Profile_Pic"
    onChange={handleChange}
  />

  <button type="submit">Sign Up</button>
  </form>
  </div>
  </>

)
}

export default withRouter (Signup);

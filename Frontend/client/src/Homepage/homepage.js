import React from "react";
import Header from "./header.js";
import SignupForm from "./signupForm.js";
import Main from "./main";
import "./HomePageCSS/Landing.css";

const Homepage = props => {
  return (
    <>
      <div className="HomepagePage">
        <Main />
        <SignupForm />
      </div>
    </>
  );
};

export default Homepage;

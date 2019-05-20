import React from "react";
import Header from "./header.js";
import SignupForm from "./signupForm.js";
import Main from "./main";

const Homepage = props => {
  console.log("hi");
  return (
    <>
      <div className="HomepagePage">
        <Header />
        <Main />
        <SignupForm />
      </div>
    </>
  );
};

export default Homepage;

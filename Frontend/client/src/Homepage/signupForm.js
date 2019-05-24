import React from "react";
import { Link, Redirect } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="SignUp">
      <form>
        <Link to="/auth/register">
          <button className="RegisterButton"> Sign up. .5,6,7,8</button>
        </Link>
        <Link to="/auth/login">
          <button className="LoginButton"> Login. .5,6,7,8</button>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;

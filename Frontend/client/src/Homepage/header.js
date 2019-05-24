import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/auth/register" id="navlink1">
          Getting started
        </Link>
        <Link to="/auth/login" id="navlink2">
          Login
        </Link>
        <Link to="/">
          <h1 id="title"> Danclr </h1>
        </Link>
      </nav>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <nav>
        <Link to="/auth/register" id="navlink1">
          Getting started
        </Link>
        <Link to="/auth/login" id="navlink2">
          Login
        </Link>
        <h1 id="title"> Danclr </h1>
      </nav>

      <div className="Main">
        <div className="slogan">
          <h2 id="come"> Come for what you love </h2>
          <h2 id="stay"> Stay for what you discover </h2>
        </div>
      </div>
    </>
  );
};

export default Main;

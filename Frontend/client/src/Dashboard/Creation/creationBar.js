import React from "react";
import { Link } from "react-router-dom";

const CreationBar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/text">
          <img
            className="creationBar"
            src="https://lh5.ggpht.com/_pOdvWF5uIYs/TW5qm_mjOSI/AAAAAAAAaUE/7dKiOdRNyrs/Upper-Lowercase-ABCs-b_thumb2.jpg?imgmax=800"
            alt=""
          />
        </Link>
        <Link to="/photo">
          <img
            className="creationBar"
            src="https://image.flaticon.com/icons/svg/37/37701.svg"
            alt=""
          />
        </Link>
      </nav>
    </>
  );
};

export default CreationBar;

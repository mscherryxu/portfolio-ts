import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img
          src="/images/cherry_logo.png"
          alt="cherry logo"
          className="nav-logo"
        />
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/projects" className="nav-link">
        Projects
      </Link>
    </div>
  );
};

export default NavBar;

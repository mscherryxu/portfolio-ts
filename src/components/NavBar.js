import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">
            <img
              src="/images/cherry_logo.png"
              alt="cherry logo"
              className="nav-logo"
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

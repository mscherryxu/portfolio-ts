import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className="menu">
        <div className="nav-links-bar-menu">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <a
            href="https://docs.google.com/document/d/1KY6UrGO4Or2B-wIfGi2nHomGm5SX1UQVYEp5yImiB4U/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    );
    menuMask = (
      <div className="menuMask" onClick={() => setShowMenu(false)}></div>
    );
  }

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
        <div className="toggle-button" onClick={() => setShowMenu(!showMenu)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {menuMask}
        {menu}
        <div className="nav-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <a
            href="https://docs.google.com/document/d/1KY6UrGO4Or2B-wIfGi2nHomGm5SX1UQVYEp5yImiB4U/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

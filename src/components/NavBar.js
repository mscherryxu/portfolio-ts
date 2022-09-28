import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions =
    useTransition(showMenu, {
      from: { position: "absolute", opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }) || [];

  const menuTransitions =
    useTransition(showMenu, {
      from: { opacity: 0, transform: "translateX(-100%)" },
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(-100%)" },
    }) || [];

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

        {maskTransitions(
          (props, item, key) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="menuMask"
                onClick={() => setShowMenu(false)}
              ></animated.div>
            )
        )}

        {menuTransitions(
          (props, item, key) =>
            item && (
              <animated.div key={key} style={props} className="menu">
                <div className="hamburger-container">
                  <div className="nav-hamburger-logo">
                    <Link to="/">
                      <img
                        src="/images/cherry_logo.png"
                        alt="cherry logo"
                        className="nav-logo"
                      />
                    </Link>
                  </div>
                  <div className="nav-links-bar-menu">
                    <span className="navigate-to">Navigate to:</span>
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
              </animated.div>
            )
        )}

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

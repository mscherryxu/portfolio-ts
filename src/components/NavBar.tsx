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

  const MobileNavLink = ({ to, name }) => (
    <Link to={to} className="nav-link" onClick={() => setShowMenu(false)}>
      {name}
    </Link>
  );

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
        <div
          className="toggle-button"
          role="button"
          onClick={() => setShowMenu(!showMenu)}
        >
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
                    <MobileNavLink to="/about" name="About" />
                    <MobileNavLink to="/projects" name="Projects" />
                    <MobileNavLink to="/contact" name="Contact" />
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
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;

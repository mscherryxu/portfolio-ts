import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-links">
          <a
            href="https://github.com/mscherryxu"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img
              src="/images/github-wordmark.png"
              className="github-logo"
              alt="github-logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cherryxu-rdcdn/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img
              src="/images/linkedin-wordmark.png"
              className="linked-in-logo"
              alt="linked-in-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-text">LET'S CONNECT</h2>
          <NavLink to="/">
            <img src="/svg/liu_reacts_logo.png" alt="liu_reacts_logo" />
          </NavLink>
        </div>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/liuhe2020"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer-list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/liuhe2020"
            >
              Twitter
            </a>
          </li>
          <li className="footer-list-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/liuhe2020"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">© 2020 Liu Reacts. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;

import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">
        <h2 className="footer-text-top">LET'S</h2>
        <h2 className="footer-text-btm">CONNECT</h2>
      </div>
      <ul className="footer-list">
        <li className="footer-list-item">
          <a target="_blank" href="https://www.linkedin.com/in/liuhe2020">
            LinkedIn
          </a>
        </li>
        <li className="footer-list-item">
          <a target="_blank" href="https://twitter.com/liuhe2020">
            Twitter
          </a>
        </li>
        <li className="footer-list-item">
          <a target="_blank" href="https://github.com/liuhe2020">
            GitHub
          </a>
        </li>
        <li className="copyright">© 2020 Liu Reacts. All Rights Reserved</li>
      </ul>
    </div>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Nav.css";

function Nav() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -400;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <ul className="nav-links">
            <li>
              <HashLink
                to="/#projects"
                smooth
                scroll={(el) => scrollWithOffset(el)}
              >
                Projects
              </HashLink>
            </li>
            <li>
              <Link to="/contact" exact>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" exact>
                About
              </Link>
            </li>
          </ul>
          <div className="social">
            <a target="_blank" href="https://www.linkedin.com/in/liuhe2020">
              <i class="fab fa-linkedin-in" />
            </a>
            <a target="_blank" href="https://twitter.com/liuhe2020">
              <i class="fab fa-twitter" />
            </a>
            <a target="_blank" href="https://github.com/liuhe2020">
              <i class="fab fa-github-alt" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

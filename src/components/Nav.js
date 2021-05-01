import { FaTwitter, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Nav.css";

function Nav() {
  // manually set scroll to projects for hashlink due to collapsing navbar when navigating
  const scrollWithOffset = (navBar) => {
    window.scrollTo({ top: navBar.offsetTop, behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-top">
          <ul className="nav-links">
            <li>
              <HashLink
                to="/#projects"
                scroll={(navBar) => scrollWithOffset(navBar)}
              >
                Projects
              </HashLink>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-btm">
          <div className="nav-email">
            <h5>Email</h5>
            <a href="mailto:lhe19@yahoo.co.uk">lhe19@yahoo.co.uk</a>
          </div>
          <div className="nav-phone">
            <h5>Phone</h5>
            <a href="tel:+447957622859">+44 7957 622859</a>
          </div>
          <div className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/liuhe2020"
            >
              <FaLinkedinIn className="fab" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/liuhe2020"
            >
              <FaGithubAlt className="fab" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/liuhe2020"
            >
              <FaTwitter className="fab" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

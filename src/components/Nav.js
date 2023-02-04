import { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import '../styles/Nav.css';

export default function Nav() {
  const { pathname } = useLocation();
  const navRef = useRef();

  // delay scroll to top for 1s to allow page exit animation
  const delayScroll = () => setTimeout(() => window.scrollTo(0, 0), 1000);

  const scrollToProjects = (el) => {
    // offset navbar height when scroll in the home page
    if (pathname === '/') {
      window.scrollTo({
        top: el.offsetTop - navRef.current.clientHeight,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    // animation is smoother without delay 1s for page exit animation
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='nav' ref={navRef}>
      <div className='nav-container'>
        <ul className='nav-links'>
          <li>
            <HashLink to='/#projects' scroll={(el) => scrollToProjects(el)}>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink to='/about#' scroll={() => delayScroll()}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to='/contact#' scroll={() => delayScroll()}>
              Contact
            </HashLink>
          </li>
        </ul>
        <div className='nav-btm'>
          <div className='nav-email'>
            <h5>Email</h5>
            <a href='mailto:lhe19@yahoo.co.uk'>lhe19@yahoo.co.uk</a>
          </div>
          <div className='nav-phone'>
            <h5>Phone</h5>
            <a href='tel:+447957622859'>+44 7957 622859</a>
          </div>
          <div className='social'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/liuhe2020'>
              <FaLinkedinIn className='fab' />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/liuhe2020'>
              <FaGithubAlt className='fab' />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/liuhe2020'>
              <FaTwitter className='fab' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

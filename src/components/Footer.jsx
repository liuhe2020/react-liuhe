import { useLocation, Link } from 'react-router-dom';
import { logo } from '../assets/images';
import '../styles/Footer.css';

export default function Footer() {
  const { pathname } = useLocation();
  const today = new Date();
  const year = today.getFullYear();

  const handleHomeScroll = () => {
    // smooth scroll to top if already on home page
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h3 className='footer-text'>LET'S CONNECT</h3>
          <Link to='/#' className='footer-logo' onClick={handleHomeScroll}>
            <img src={logo} alt='liu_he_logo' />
          </Link>
        </div>
        <ul className='footer-list'>
          <li className='footer-list-item'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/liuhe2020'>
              LinkedIn
            </a>
          </li>
          <li className='footer-list-item'>
            <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/liuhe2020'>
              Twitter
            </a>
          </li>
          <li className='footer-list-item'>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/liuhe2020'>
              GitHub
            </a>
          </li>
        </ul>
        <div className='contact-info'>
          <div className='contact-email'>
            <h5>Email</h5>
            <a href='mailto:lhe19@yahoo.co.uk'>lhe19@yahoo.co.uk</a>
          </div>
          <div className='contact-phone'>
            <h5>Phone</h5>
            <a href='tel:+447957622859'>+44 7957 622859</a>
          </div>
        </div>
        <p className='copyright'>&copy; {year} All Rights Reserved.</p>
      </div>
    </div>
  );
}

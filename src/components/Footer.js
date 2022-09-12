import { HashLink } from 'react-router-hash-link';
import '../styles/Footer.css';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h2 className='footer-text'>LET'S CONNECT</h2>
          <HashLink to='/#home' smooth>
            <img src='/svg/liu_he_logo.png' alt='liu_he_logo' />
          </HashLink>
        </div>
        <ul className='footer-list'>
          <li className='footer-list-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/liuhe2020'
            >
              LinkedIn
            </a>
          </li>
          <li className='footer-list-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/liuhe2020'
            >
              Twitter
            </a>
          </li>
          <li className='footer-list-item'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/liuhe2020'
            >
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
      </div>
      <div className='copyright'>
        © {year} Liu He .dev. All Rights Reserved.
      </div>
    </div>
  );
}

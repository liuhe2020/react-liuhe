import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// hash link allows scroll to hash(element by #id) even from another page component
import { HashLink } from 'react-router-hash-link';
import gsap from 'gsap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import useViewport from '../utils/useViewport';
import '../styles/Header.css';

const Header = ({ history }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const viewportWidth = useViewport();

  const menuHeight = (arg) => {
    if (arg === 'page') {
      if (viewportWidth < 1600) {
        return '317px';
      }
      return 'calc(20vw - 3px)';
    }
    if (arg === 'nav') {
      if (viewportWidth < 1600) {
        return '-320px';
      }
      return '-20vw';
    }
  };

  useEffect(() => {
    // set menu to close after navigation based on listening to route change
    history.listen(() => {
      setIsMenuOpen(false);
    });

    // navbar is hidden on top of the page and slides down 320px when toggled
    // the rest of the body slides down at the same time for 317px
    // to prevent white line/seam flashing between the navbar and the page body during animation
    if (isMenuOpen) {
      gsap.to('.nav', { css: { top: '0' }, duration: 1, ease: 'expo.inOut' }); // push navbar into view
      gsap.to('.page', { css: { transform: `translateY(${menuHeight('page')})` }, duration: 1, ease: 'expo.inOut' }); // push page content down along navbar
      gsap.to('.nav-toggle', { css: { display: 'none' } });
      gsap.to('.nav-close', { css: { display: 'block' }, delay: 0.5 });
      gsap.to('body', { css: { overflow: 'hidden' } }); // lock scroll
      gsap.fromTo('.nav-container', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 }); // fade in nav menu content
    } else {
      gsap.to('.nav', {
        css: { top: menuHeight('nav') },
        duration: 1,
        ease: 'expo.inOut',
      });
      gsap.to('.page', { y: 0, duration: 1, ease: 'expo.inOut' });
      gsap.to('.nav-toggle', { css: { display: '' }, delay: 0.5 });
      gsap.to('.nav-close', { css: { display: 'none' } });
      gsap.to('body', { css: { overflow: 'unset' } });
      gsap.fromTo('.nav-container', { opacity: 1 }, { opacity: 0, duration: 0.5 });
    }
  });

  return (
    <div className='header'>
      <div className='header-container'>
        <HashLink to='/#home' smooth className='logo'>
          <img src='/svg/liu_he_logo.png' alt='liu_he_logo' />
        </HashLink>
        <GiHamburgerMenu className='nav-toggle' onClick={() => setIsMenuOpen(true)} />
        <FaRegArrowAltCircleUp className='nav-close' onClick={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
};

export default withRouter(Header);

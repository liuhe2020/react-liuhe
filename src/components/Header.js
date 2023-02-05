import { useState, useEffect } from 'react';
import { withRouter, useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';
import { RemoveScroll } from 'react-remove-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import useViewport from '../utils/useViewport';
import '../styles/Header.css';

const Header = ({ history }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const viewportWidth = useViewport();

  // handle scroll to top on the home page
  const handleHomeScroll = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  // helper to calc height for nav animation
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

    // navbar is hidden on top of the page and slides down 320px when toggled, the rest of the body slides down at the same time for 317px. to prevent white line/seam flashing between the navbar and the page body during animation
    // animating padding on page instead of translateY, to avoid white space at bottom of page
    if (isMenuOpen) {
      gsap.to('.nav', { css: { top: '0' }, duration: 1, ease: 'expo.inOut' }); // push navbar into view
      gsap.to('.page', { css: { paddingTop: menuHeight('page') }, duration: 1, ease: 'expo.inOut' }); // push page content down along navbar
      gsap.to('.nav-toggle', { css: { display: 'none' } });
      gsap.to('.nav-close', { css: { display: 'block' }, delay: 0.5 });
      gsap.fromTo('.nav-container', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.5 }); // fade in nav menu content
    } else {
      gsap.to('.nav', {
        css: { top: menuHeight('nav') },
        duration: 1,
        ease: 'expo.inOut',
      });
      gsap.to('.page', { css: { paddingTop: '0' }, duration: 1, ease: 'expo.inOut' });
      gsap.to('.nav-toggle', { css: { display: '' }, delay: 0.5 });
      gsap.to('.nav-close', { css: { display: 'none' } });
      gsap.fromTo('.nav-container', { opacity: 1 }, { opacity: 0, duration: 0.5 });
    }
  });

  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <Link to='/' className='logo' onClick={handleHomeScroll}>
            <img src='/svg/liu_he_logo.png' alt='liu_he_logo' />
          </Link>
          <GiHamburgerMenu className='nav-toggle' onClick={() => setIsMenuOpen(true)} />
          <FaRegArrowAltCircleUp className='nav-close' onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
      {/* Lock body scroll */}
      {isMenuOpen && <RemoveScroll removeScrollBar={false} />}
    </>
  );
};

export default withRouter(Header);

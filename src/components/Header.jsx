import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { RemoveScroll } from 'react-remove-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import useViewport from '../utils/useViewport';
import { logo } from '../assets/images';
import '../styles/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const param = useParams();
  const viewportWidth = useViewport();

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

  useEffect(() => {
    // helper to calc height for nav animation
    const menuHeight = (arg) => {
      if (arg === 'page') {
        if (viewportWidth < 1600) {
          return '320px';
        }
        return '20vw';
      }
      if (arg === 'nav') {
        if (viewportWidth < 1600) {
          return '-320px';
        }
        return '-20vw';
      }
    };

    // navbar is hidden on top of the window and slides down 320px or 20vw (based on viewport) when toggled
    // the rest of the page (.page class) slides down at the same time
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
      gsap.to('.nav-toggle', { css: { display: 'block' }, delay: 0.5 });
      gsap.to('.nav-close', { css: { display: 'none' } });
      gsap.fromTo('.nav-container', { opacity: 1 }, { opacity: 0, duration: 0.5 });
    }
  }, [isMenuOpen, viewportWidth]);

  // set menu to close after navigation based on listening to route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <Link to='/' className='logo' onClick={handleHomeScroll}>
            <img src={logo} alt='liu_he_logo' />
          </Link>
          <GiHamburgerMenu className='nav-toggle' onClick={() => setIsMenuOpen(true)} />
          <FaRegArrowAltCircleUp className='nav-close' onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
      {/* Lock body scroll */}
      {isMenuOpen && <RemoveScroll removeScrollBar={false} />}
    </>
  );
}

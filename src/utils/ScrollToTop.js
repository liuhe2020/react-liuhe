import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // delay scroll to top for 1s to allow page exit animation
    const delayScroll = setTimeout(() => window.scrollTo(0, 0), 1000);
    return () => clearTimeout(delayScroll);
  }, [pathname]);

  return null;
}

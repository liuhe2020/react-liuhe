import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // do not scroll to top on hash routes, i.e. #projects
    if (location.hash) {
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

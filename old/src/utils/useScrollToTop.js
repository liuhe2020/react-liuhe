import { useEffect } from 'react';

export default function useScrollToTop() {
  useEffect(() => {
    // do not scroll to top on hash routes, i.e. #projects
    if (window.location.href.includes('#')) {
      return;
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}

import { useEffect, useState, useCallback } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return width;
};

export default function useViewport() {
  const [viewportWidth, setViewportWidth] = useState(getWindowDimensions());
  const handleResize = useCallback(() => setViewportWidth(getWindowDimensions()), []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return viewportWidth;
}

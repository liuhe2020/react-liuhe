const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return width;
};

const useWindowSize = () => {
  const [viewportWidth, setViewportWidth] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [delay]);

  return windowDimensions;
};

export default useWindowSize;

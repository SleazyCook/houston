import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopReroute = () => {
  const { pathname } = useLocation();

    useEffect(() => {
    const container = document.querySelector('.app-router-wrapper__inner');
    if (container) {
        const timer = setTimeout(() => {
        container.scrollTo({ top: 0, left: 0 });
        }, 50);
        return () => clearTimeout(timer);
    } else {
        // Fallback to window
        const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0 });
        }, 50);
        return () => clearTimeout(timer);
    }
    }, [pathname]);


  return null;
};

export default ScrollToTopReroute;

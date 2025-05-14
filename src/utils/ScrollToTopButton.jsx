import { useEffect, useState } from 'react';

export default function ScrollToTopButton({ targetRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = targetRef?.current;
    if (!container) return;

    const handleScroll = () => {
      setVisible(container.scrollTop > 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [targetRef]);

  const scrollToTop = () => {
    if (targetRef?.current) {
      targetRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 999,
        background: '#000',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      ↑ Top
    </button>
  ) : null;
}

import { useState, useEffect } from 'react';
import locations from '../data/locations';

const Highlight = ({setLat, setLon, setZoom}) => {
  const [highlight, setHighlight] = useState(() => {
    const saved = localStorage.getItem('highlight');
    return saved ? JSON.parse(saved) : null;
  });

    const handleClick = () => {
    setLat(highlight.coordinates[0]);
    setLon(highlight.coordinates[1]);
    setZoom(17);
    };

  useEffect(() => {
    function pickRandomLocation() {
      if (Array.isArray(locations) && locations.length > 0) {
        const random = locations[Math.floor(Math.random() * locations.length)];
        setHighlight(random);
        localStorage.setItem('highlight', JSON.stringify(random));
        console.log('New highlight selected:', random);
      }
    }

    if (!highlight) {
      pickRandomLocation();
    }

    const interval = setInterval(pickRandomLocation, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, [highlight]);

  if (!highlight) {
    return <div>Loading highlight...</div>;
  }

  return (
    <div className='highlight' onClick={handleClick}>
        <div className='highlight__img'>
            <img src={highlight.img} alt={`image for ${highlight.name}`} />
        </div>
        <div className='highlight__details'>
            <div className='highlight__header'>
                <span>Random:</span> {highlight.name}</div>
            <div className='highlight__header'>
                <span>Neighborhood:</span> {highlight.neighborhood}</div>
            <div className='highlight__description'>
                <span>Description:</span> {highlight.blurb}</div>
            <button className='highlight__map-btn'>
                View on Map
            </button>
        </div>

    </div>
  );
};

export default Highlight;
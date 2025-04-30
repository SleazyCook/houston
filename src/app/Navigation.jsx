import { Link } from "react-router-dom";

const Navigation = ({ setLat, setLon, setZoom }) => {
  // Reset Map Coordinates to Houston center
  const resetCoordinates = () => {
    setLat(29.7604);
    setLon(-95.3698);
    setZoom(11);
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Combines scroll + optional coordinate reset
  const handleClick = (shouldResetCoordinates = false) => () => {
    scrollToTop();
    if (shouldResetCoordinates) resetCoordinates();
  };

  return (
    <div className="navigation">
      <Link to="/" onClick={handleClick(true)}>Map</Link>
      <Link to="/food" onClick={handleClick()}>Restaurants</Link>
      <Link to="/activities" onClick={handleClick()}>Activities</Link>
      <Link to="/about" onClick={handleClick()}>About</Link>
    </div>
  );
};

export default Navigation;

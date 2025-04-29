import { Link } from "react-router-dom";

const Navigation = ({ setLat, setLon, setZoom }) => {
  // reset Map Coordinates to Houston center
  const resetCoordinates = () => {
    setLat(29.7604);
    setLon(-95.3698);
    setZoom(11);
  };
    return (
      <div className='navigation'>
      <Link to="/" onClick={resetCoordinates}>Map</Link>
        <Link to='/food'>Restaurants</Link>
        <Link to='/activities'>Activities</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  };
  
  export default Navigation;
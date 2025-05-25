// pages/LocationPage.js
import { useParams, Link } from 'react-router-dom';

import Location from '../components/Location.jsx';
import NotFound from './NotFound.jsx';

import locations from "../data/locations";
import generateLocationSlug from '../utils/slug.js';

const LocationPage = ({ setLat, setLon, setZoom }) => {
  const { slug } = useParams();
  const location = locations.find(loc => generateLocationSlug(loc) === slug);

  const renderLink = () => {
    if (location.category == 'food') {
      return (
        <Link to="/food" className="see-more-link">
          See more restaurants 
        </Link>
      );
    } else {
      return (
        <Link to="/activities" className="see-more-link">
          See more activities
        </Link>
      );
    }
  };

  if (!location) 
    return(
      <NotFound />
    );

  return (
    <div className="location-details-page">
      <Location 
          item={location}
          setLat={setLat} 
          setLon={setLon} 
          setZoom={setZoom}
          />
      <div className="see-more-container">
          {renderLink()}
      </div>
    </div>
  );
}

export default LocationPage;
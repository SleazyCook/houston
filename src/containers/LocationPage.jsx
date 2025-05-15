// pages/LocationPage.js
import { useParams, Link } from 'react-router-dom';

import Location from '../components/Location.jsx';

import locations from "../data/locations";
import generateLocationSlug from '../utils/slug.js';

const LocationPage = ({ setLat, setLon, setZoom }) => {
  const { slug } = useParams();
  const location = locations.find(loc => generateLocationSlug(loc) === slug);

  const renderLink = () => {
    if (location.subcategory == 'food') {
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
        <div>
            <br />
            <br />
            {console.log('location not found')}
            Location Not Found
            </div>
    );

  return (
    <div className="location-details-page">
        {/* Dynamic Background Image */}
        {/* <div
            className="background-overlay"
            style={{
            position: 'absolute', // Position overlay over content
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${location.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7, // Set the opacity of the background image here
            zIndex: -3, // Make sure the overlay stays behind the content
        }}></div> */}


            <Location 
                item={location}
                setLat={setLat} 
                setLon={setLon} 
                setZoom={setZoom}
                />
            <div className="see-more-container">
                {renderLink()}
            </div>
  

        
      {/* Render other location data */}
    </div>
  );
}

export default LocationPage;
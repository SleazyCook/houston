// pages/LocationPage.js
import { useParams, Link } from 'react-router-dom';

import Location from '../components/Location.jsx';

import locations from "../data/locations";
import generateLocationSlug from '../utils/slug.js';



export default function LocationPage() {
  const { slug } = useParams();
  const location = locations.find(loc => generateLocationSlug(loc) === slug);

  const renderLink = () => {
    if (location.subcategory && location.category !== 'attraction') {
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
            <br />
            <br />
            <br />
            {console.log('location not found')}
            Location Not Found
            </div>
    );

  return (
    <div
        className="location-page"
        style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '150px',
        paddingBottom: '150px',
        }}
    >
        <div
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
          zIndex: -1, // Make sure the overlay stays behind the content
        }}></div>

        <div>
            <Location item={location}/>
            <div className="see-more-container">
                {renderLink()}
            </div>
        </div>

        
      {/* Render other location data */}
    </div>
  );
}
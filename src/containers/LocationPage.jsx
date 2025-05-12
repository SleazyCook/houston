// pages/LocationPage.js
import { useParams } from 'react-router-dom';

import Location from '../components/Location.jsx';

import locations from "../data/locations";
import generateLocationSlug from '../utils/slug.js';



export default function LocationPage() {
  const { slug } = useParams();
  const location = locations.find(loc => generateLocationSlug(loc) === slug);

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
    <div className='location-page'>
        <Location item={location}/>
      {/* Render other location data */}
    </div>
  );
}
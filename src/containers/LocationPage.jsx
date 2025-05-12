// pages/LocationPage.js
import { useParams } from 'react-router-dom';
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
    <div>
            <br />
            <br />
            <br />
            <br />
            <br />
      <h1>{location.name}</h1>
      <p>{location.blurb}</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>

      {/* Render other location data */}
    </div>
  );
}
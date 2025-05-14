import React, { useEffect, useState } from 'react';

import Weather from '../components/Weather';
import Leaflet from "../map/Leaflet";
import locations from "../data/locations";

const Home = ({lat, lon, zoom, setZoom}) => {
  const totalLocations = Object.keys(locations).length;

  return (
    <div>
      <h1>HOME</h1>
      <p>Drewford's favorite locations in Houston, Texas</p>
      <p>{totalLocations} locations recorded and counting...</p>

      <Weather />

      <Leaflet lat={lat} lon={lon} zoom={zoom} setZoom={setZoom}/>
    </div>
  );
};

export default Home;

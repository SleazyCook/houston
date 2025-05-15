import React, { useEffect, useState } from 'react';

import Highlight from '../components/Highlight';
import Weather from '../components/Weather';
import Leaflet from "../map/Leaflet";
import locations from "../data/locations";

const Home = ({lat, lon, zoom, setZoom}) => {
  const totalLocations = Object.keys(locations).length;

  return (
    <div className='container home'>
      <img 
        className='home__header-img'
        src='https://i.imgur.com/hrgsIPz.png' />

      <div className='home__header'>
        <h1>dREW's HOuSToN sPOTS</h1>
        <p>{totalLocations} locations recorded so far...</p>
      </div>


      <div className='home__widgets-box'>
        <Weather />
        <Highlight />
      </div>

      <Leaflet lat={lat} lon={lon} zoom={zoom} setZoom={setZoom}/>
    </div>
  );
};

export default Home;

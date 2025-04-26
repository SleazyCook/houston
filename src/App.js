import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// app
import Navigation from './app/Navigation';
import Footer from './app/Footer';

// containers
import Home from './containers/Home'
import Restaurants from './containers/Restaurants';
import Activities from './containers/Activities';
import About from './containers/About'

function App() {
  const [lat, setLat] = useState(29.7604);
  const [lon, setLon] = useState(-95.3698);
  const [zoom, setZoom] = useState(11);

  console.log(lat, lon)
  console.log(typeof lat, typeof lat)

  return (
      <Router>
      <Navigation 
        setLat={setLat}  
        setLon={setLon} 
        setZoom={setZoom}/>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                lat={lat} 
                lon={lon} 
                zoom={zoom}
              /> 
            } 
          />
          <Route 
            path='/food'
            element={
              <Restaurants 
                setLat={setLat} 
                setLon={setLon} 
                setZoom={setZoom}
              />
            } 
          />
          <Route 
            path='/activities'
            element={
              <Activities />
            } />
          <Route 
            path="/about" 
            element={<About />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;

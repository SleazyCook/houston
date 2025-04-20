import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import locations from './locations';
import icons from './icons';

const Leaflet = () => {
  useEffect(() => {
    // Prevent map from initializing multiple times
    if (!document.getElementById('map')._leaflet_id) {
    //   const map = L.map('map').setView([51.505, -0.09], 13);
    const map = L.map('map').setView([29.7604, -95.3698], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // example icon (map pin)
        iconSize: [38, 38], // size of the icon
        iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
      });

      // Loop through the locations array and create markers
        locations.forEach(location => {
            // Create custom icon for each location
            const customIcon = L.icon({
            iconUrl: location.iconUrl,
            iconSize: [38, 38],  // size of the icon
            iconAnchor: [19, 38], // anchor point of the icon (center of the bottom)
            popupAnchor: [0, -38] // popup should appear above the icon
            });
        
            // Create the marker for the location
            const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);
        
            // Bind a popup to the marker
            marker.bindPopup(`
                <img src=${location.img} width=200 /><br/>
                <b>${location.name}</b><br>
                <a href=${location.website} target='_blank'>
                    Vist Website</a>
                <ul>
                    <li>${location.description[0]}</li>
                    <li>${location.description[1]}</li>
                    <li>${location.description[2]}</li>
                </ul>`);
        });
      
    //   // Add the marker with custom icon
    //   const marker = L.marker([29.7590, -95.3657], { icon: customIcon }).addTo(map);
      
    //   // Add the popup
    //   marker.bindPopup("<b>Wells Fargo Plaza</b><br>Downtown Houston").openPopup();
      
    //   const shellIcon = L.icon({
    //     iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684803.png', // example soccer ball icon
    //     iconSize: [38, 38], // size of the icon
    //     iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
    //     popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
    //   });
      
    //   // Add the Shell Stadium marker with custom icon
    //   const shellMarker = L.marker([29.7489, -95.3701], { icon: shellIcon }).addTo(map);
      
    //   // Add the popup for Shell Stadium
    //   shellMarker.bindPopup("<b>Shell Stadium</b><br>Home of Houston Dynamo & Dash").openPopup();






    }
  
  }, []); // empty dependency array = run once after mount

  return (
    <div>

      <div id="map" style={{ height: '400px', width: '100%' }}></div>

    </div>
  );
};

export default Leaflet;

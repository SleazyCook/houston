import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import locations from './locations';
import locations1 from './locations1';
import icons from './icons';

const Leaflet = () => {
  useEffect(() => {
    // Prevent map from initializing multiple times
    if (!document.getElementById('map')._leaflet_id) {

      // open street map
      var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
      });
      
      // var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      //     maxZoom: 19,
      //     attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});
      



      var map = L.map('map', {
          center: [29.7604, -95.3698],
          zoom: 11,
          layers: []
      });

      var baseMaps = {
          "OpenStreetMap": osm,
          // "OpenStreetMap.HOT": osmHOT
      };
      
      var overlayMaps = {
          // "Cities": cities,
      };

      var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

      var baseMaps = {
          "OpenStreetMap": osm,
          // "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
      };

      var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.')
      var rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
          
      var parks = L.layerGroup([crownHill, rubyHill]);
      var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
      });

      // layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
      layerControl.addOverlay(parks, "Parks");



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

      const restaurants = L.layerGroup()

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
    


        if (location.category == "food") {
          console.log(location.name, "is a restaurant")
          restaurants.addLayer(marker)
        }

        console.log(restaurants)


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

      layerControl.addOverlay(restaurants, "Restaurants");

    }
  
  }, []); 

  return (
    <div>

      <div id="map" style={{ height: '400px', width: '100%' }}></div>

    </div>
  );
};

export default Leaflet;

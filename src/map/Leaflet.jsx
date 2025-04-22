import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import locations from '../data/locations';
import icons from '../data/icons';

const Leaflet = () => {
  useEffect(() => {
    // Prevent map from initializing multiple times
    if (!document.getElementById('map')._leaflet_id) {

      // open street map
      var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          // attribution: '© OpenStreetMap'
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
          // "OpenStreetMap": osm,
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

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // const customIcon = L.icon({
      //   iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // example icon (map pin)
      //   iconSize: [38, 38], // size of the icon
      //   iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
      //   popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
      // });


      // Layers 1 of 4: Create Layer
      const restaurants = L.layerGroup();
      const bars = L.layerGroup();
      const books = L.layerGroup();
      const market = L.layerGroup();
      const movies = L.layerGroup();
      const music = L.layerGroup();

      // Start locations loop
      locations.forEach(location => {

        // Layers 2 of 4: Assign Icon Image
        let mapIconUrl = ''
        if (location.category == "food") {
          mapIconUrl = 'https://i.imgur.com/s2BRLZD.png';
        } else if (location.category == "bar") {
          mapIconUrl = 'https://i.imgur.com/VtHXOyL.png';
        } else if (location.category == "books") {
          mapIconUrl = 'https://images.vexels.com/media/users/3/324280/isolated/preview/9d52451aee79d0393830d6dca2afe6b7-book-icon-in-red-color.png';
        } else if (location.category == "market") {
          mapIconUrl = 'https://static.thenounproject.com/png/1730-200.png' ;
        } else if (location.category == "movies") {
          mapIconUrl = 'https://i.imgur.com/DgxjJXt.png';
        } else if (location.category == 'music') {
          mapIconUrl = 'https://i.imgur.com/2SrhTIj.png';
        }

        const customIcon = L.icon({
          iconUrl: mapIconUrl,
          iconSize: [38, 38],  // size of the icon
          iconAnchor: [19, 38], // anchor point of the icon (center of the bottom)
          popupAnchor: [0, -38] // popup should appear above the icon
        });
    
        // Create the marker for the location
        const marker = L.marker([location.coordinates[0], location.coordinates[1]], { icon: customIcon }).addTo(map);
    
        // Layers 3 of 4: Assign Marker to Layer
        if (location.category == "food") {
          // console.log(location.name, "is a restaurant")
          restaurants.addLayer(marker);
        } else if (location.category == "bar") {
          bars.addLayer(marker);
        } else if (location.category == "books") {
          books.addLayer(marker);
        } else if (location.category == "market") {
          movies.addLayer(marker);
        } else if (location.category == "movies") {
          movies.addLayer(marker);
        } else if (location.category == "music") {
          music.addLayer(marker);
        }

        // console.log(Array.isArray(Object.values(location.description)))
        // const descriptionArray = Object.values(location.description)
        // console.log(descriptionArray)

        // Bind a popup to the marker
        marker.bindPopup(`
          <img src=${location.img} width=200 /><br/>
          <b>${location.name}</b><br>
          <span>${location.blurb}</span><br>
          <a href=${location.website} target='_blank'>
              Vist Website</a>
          <ul>
              <li>${location.description[0]}</li>
              <li>${location.description[1]}</li>
              <li>${location.description[2]}</li>
          </ul>`);
      });
      // End locations loop

      // Layers 4 of 4: Add Controls for Each Layer
      layerControl.addOverlay(restaurants, "Restaurants");
      layerControl.addOverlay(bars, "Bars & Lounges");
      layerControl.addOverlay(books, "Bookstores");
      layerControl.addOverlay(market, "Markets");
      layerControl.addOverlay(movies, "Movie Theaters");
      layerControl.addOverlay(music, "Music Venues");
    }
  
  }, []); 

  return (
    <div>

      <div id="map" style={{ height: '400px', width: '100%' }}></div>

    </div>
  );
};

export default Leaflet;

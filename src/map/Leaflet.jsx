import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { FaBeer, FaMapMarkerAlt, FaCar, FaBicycle } from 'react-icons/fa';

import locations from '../data/locations';
import icons from '../data/icons';


const Leaflet = ({lat, lon, zoom }) => {

  useEffect(() => {
    // Prevent map from initializing multiple times
    if (!document.getElementById('map')._leaflet_id) {

      // open street map
      var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          // attribution: '© OpenStreetMap'
      });

      var map = L.map('map', {
          center: [lat, lon],
          zoom: zoom,
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

      // Layers 1 of 4: Create Layer
      const restaurants = L.layerGroup();
      const bars = L.layerGroup();
      const books = L.layerGroup();
      const markets = L.layerGroup();
      const movies = L.layerGroup();
      const music = L.layerGroup();
      const parks = L.layerGroup();
      const attractions = L.layerGroup();

      // Start locations loop
      locations.forEach(location => {

        // Layers 2 of 4: Assign Icon Image
        let mapIconUrl = ''
        // Activities First, to avoid food subcategory override.
        if (location.category == "bar") {
          mapIconUrl = icons.bar;
        } else if (location.category == "books") {
          mapIconUrl = icons.books;
        } else if (location.category == "market") {
          mapIconUrl = icons.market ;
        } else if (location.category == "movies") {
          mapIconUrl = icons.movies;
        } else if (location.category == 'music') {
          mapIconUrl = icons.music;
        } else if (location.category == 'park') {
          mapIconUrl = icons.parks;
          // Attractions subcategories
        } else if (location.subcategory == 'soccer') {
          mapIconUrl = icons.soccer;
        } else if (location.subcategory == 'kemah') {
          mapIconUrl = icons.kemah;
        } else if (location.subcategory == 'gokart') {
          mapIconUrl = icons.gokart;
        } else if (location.subcategory == 'meow') {
          mapIconUrl = icons.meow;
        } else if (location.subcategory == 'basketball') {
          mapIconUrl = icons.basketball;
        } else if (location.subcategory == 'zoo') {
          mapIconUrl = icons.zoo;
          // Restaurants subcategories
        } else if (location.subcategory == 'burgers') {
          mapIconUrl = icons.burgers;
        } else if (location.subcategory == 'breakfast') {
          mapIconUrl = icons.breakfast;
        } else if (location.subcategory == 'chicken') {
          mapIconUrl = icons.chicken;
        } else if (location.subcategory == 'dessert') {
          mapIconUrl = icons.dessert;
        } else if (location.subcategory == 'dumplings') {
          mapIconUrl = icons.dumplings;
        } else if (location.subcategory == 'hotdogs') {
          mapIconUrl = icons.hotdogs;
        } else if (location.subcategory == 'pizza') {
          mapIconUrl = icons.pizza;
        } else if (location.subcategory == 'ramen') {
          mapIconUrl = icons.ramen;
        } else if (location.subcategory == 'ricebowl') {
          mapIconUrl = icons.rice;
        } else if (location.subcategory == 'sandwiches') {
          mapIconUrl = icons.sandwiches;
        } else if (location.subcategory == 'seafood') {
          mapIconUrl = icons.seafood;
        } else if (location.subcategory == 'sushi') {
          mapIconUrl = icons.sushi;
        } else if (location.subcategory == 'tacos') {
          mapIconUrl = icons.tacos;
        } else if (location.subcategory == 'upscale') {
          mapIconUrl = icons.upscale;
        } else if (location.subcategory == 'hall') {
          mapIconUrl = icons.foodhalls;
        }  else if (location.category == "food") {
          mapIconUrl = icons.burgers;
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
          markets.addLayer(marker);
        } else if (location.category == "movies") {
          movies.addLayer(marker);
        } else if (location.category == "music") {
          music.addLayer(marker);
        } else if (location.category == "park") {
          parks.addLayer(marker);
        } else if (location.category == "attractions") {
          parks.addLayer(marker);
        }

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
      restaurants.addTo(map);
      attractions.addTo(map);
      bars.addTo(map);
      books.addTo(map);
      markets.addTo(map);
      movies.addTo(map);
      music.addTo(map);
      parks.addTo(map);

      layerControl.addOverlay(restaurants, "Restaurants");

      layerControl.addOverlay(bars, "Bars & Lounges");
      layerControl.addOverlay(books, "Books");
      layerControl.addOverlay(markets, "Markets");
      layerControl.addOverlay(movies, "Movie Theaters");
      layerControl.addOverlay(music, "Music Venues");
      layerControl.addOverlay(parks, "Parks")
      layerControl.addOverlay(parks, "Attractions")
    }
  
  }, []); 

  return (
    <div>

      <div id="map" style={{ height: '400px', width: '100%' }}></div>

    </div>
  );
};

export default Leaflet;

import { useState, useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.pinsearch'; 

import { FaBeer, FaMapMarkerAlt, FaCar, FaBicycle } from 'react-icons/fa';

import locations from '../data/locations';
import icons from '../data/icons';


const Leaflet = ({lat, lon, zoom, setZoom }) => {
  const mapRef = useRef(null);

  // Click outside search to close AC
  // const searchContainer = document.querySelector('.leaflet-control-pinsearch');
  // const autocompleteResults = document.querySelector('.search-results'); // update with actual class

  // document.addEventListener('click', function (event) {
  //     if (!searchContainer.contains(event.target)) {
  //         if (autocompleteResults) {
  //             autocompleteResults.style.display = 'none';
  //         }
  //     }
  // });

  useEffect(() => {
    // Prevent map from initializing multiple times
    if (!document.getElementById('map')._leaflet_id) {

      // // open street map
      // var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //     maxZoom: 19,
      //     // attribution: '© OpenStreetMap'
      // });

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

      // var baseMaps = {
      //     "OpenStreetMap": osm,
      //     // "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
      // };

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);


      // Layers 1 of 5: Create Layer
      const restaurants = L.layerGroup();
      const bars = L.layerGroup();
      const books = L.layerGroup();
      const coffee = L.layerGroup();
      const markets = L.layerGroup();
      const movies = L.layerGroup();
      const music = L.layerGroup();
      const parks = L.layerGroup();
      const photo = L.layerGroup();
      const attractions = L.layerGroup();

      // Start locations loop
      locations.forEach(location => {

        // Layers 2 of 5: Assign Icon Image
        let mapIconUrl = ''
        // Activities First, to avoid food subcategory override.
        if (location.category == "bar") {
          mapIconUrl = icons.bar;
        } else if (location.category == "books") {
          mapIconUrl = icons.books;
        } else if (location.category == "coffee") {
          mapIconUrl = icons.coffee;
        } else if (location.category == "market") {
          mapIconUrl = icons.market ;
        } else if (location.category == "movies") {
          mapIconUrl = icons.movies;
        } else if (location.category == 'music') {
          mapIconUrl = icons.music;
        } else if (location.category == 'park') {
          mapIconUrl = icons.parks;
        } else if (location.category == 'photo') {
          mapIconUrl = icons.photo;
          // Attractions subcategories
        } else if (location.subcategory?.[0] == 'soccer') {
          mapIconUrl = icons.soccer;
        } else if (location.subcategory?.[0] == 'kemah') {
          mapIconUrl = icons.kemah;
        } else if (location.subcategory?.[0] == 'gokart') {
          mapIconUrl = icons.gokart;
        } else if (location.subcategory?.[0] == 'meow') {
          mapIconUrl = icons.meow;
        } else if (location.subcategory?.[0] == 'basketball') {
          mapIconUrl = icons.basketball;
        } else if (location.subcategory?.[0] == 'zoo') {
          mapIconUrl = icons.zoo;
        } else if (location.subcategory?.[0] == 'comedy') {
          mapIconUrl = icons.comedy;
        } else if (location.subcategory?.[0] == 'football') {
          mapIconUrl = icons.football;
          // Restaurants subcategories
        } else if (location.subcategory?.[0] == 'bbq') {
          mapIconUrl = icons.bbq;
        } else if (location.subcategory?.[0] == 'burgers') {
          mapIconUrl = icons.burgers;
        } else if (location.subcategory?.[0] == 'breakfast') {
          mapIconUrl = icons.breakfast;
        } else if (location.subcategory?.[0] == 'chicken') {
          mapIconUrl = icons.chicken;
        } else if (location.subcategory?.[0] == 'dessert') {
          mapIconUrl = icons.dessert;
        } else if (location.subcategory?.[0] == 'dumplings') {
          mapIconUrl = icons.dumplings;
        } else if (location.subcategory?.[0] == 'hotdogs') {
          mapIconUrl = icons.hotdogs;
        } else if (location.subcategory?.[0] == 'pizza') {
          mapIconUrl = icons.pizza;
        } else if (location.subcategory?.[0] == 'ramen') {
          mapIconUrl = icons.ramen;
        } else if (location.subcategory?.[0] === 'ramen') {
          mapIconUrl = icons.ramen;
        } else if (location.subcategory?.[0] == 'ricebowl') {
          mapIconUrl = icons.rice;
        } else if (location.subcategory?.[0] == 'sandwiches') {
          mapIconUrl = icons.sandwiches;
        } else if (location.subcategory?.[0] == 'seafood') {
          mapIconUrl = icons.seafood;
        } else if (location.subcategory?.[0] == 'sushi') {
          mapIconUrl = icons.sushi;
        } else if (location.subcategory?.[0] == 'tacos') {
          mapIconUrl = icons.tacos;
        } else if (location.subcategory?.[0] == 'upscale') {
          mapIconUrl = icons.upscale;
        } else if (location.subcategory?.[0] == 'hall') {
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
        const marker = L.marker(
          [location.coordinates[0], location.coordinates[1]],
          {
            icon: customIcon,
            title: location.name || 'Default Title'  // Make sure this is a string
          }
        ).addTo(map);
        
        // Layers 3 of 5: Assign Marker to Layer
        if (location.category == "food") {
          // console.log(location.name, "is a restaurant")
          restaurants.addLayer(marker);
        } else if (location.category == "bar") {
          bars.addLayer(marker);
        } else if (location.category == "books") {
          books.addLayer(marker);
        } else if (location.category == "coffee") {
          books.addLayer(marker);
        } else if (location.category == "market") {
          markets.addLayer(marker);
        } else if (location.category == "movies") {
          movies.addLayer(marker);
        } else if (location.category == "music") {
          music.addLayer(marker);
        } else if (location.category == "park") {
          parks.addLayer(marker);
        } else if (location.category == "photo") {
          photo.addLayer(marker);
        } else if (location.category == "attraction") {
          attractions.addLayer(marker);
        }

        // Truncated Blurb for Popup
        // const maxBlurbLength = 100;
        // const truncatedBlurb = location.blurb.length > maxBlurbLength
        //   ? location.blurb.slice(0, maxBlurbLength) + "..."
        //   : location.blurb;

        //   console.log(truncatedBlurb)

        // Bind a popup to the marker
        marker.bindPopup(`
          <div class='popup'>
            <img src=${location.img} width=200 /><br/>
            <div class='popup__content'>
              <span class='popup__neighborhood'>${location.neighborhood}</span>
              <span class='popup__name'>${location.name}</span>
              <span class='popup__blurb'>${location.blurb}</span><br>
              <a href=${location.website} target='_blank'>
                  Vist Website</a>

            </div>
          <div>`);

          // <ul>
            // <li>${location.description[0]}</li>
            // <li>${location.description[1]}</li>
            // <li>${location.description[2]}</li>
          // </ul>
      });
      // End locations loop

      // Layers 4 of 5: Add layer to map
      restaurants.addTo(map);
      attractions.addTo(map);
      bars.addTo(map);
      books.addTo(map);
      coffee.addTo(map);
      markets.addTo(map);
      movies.addTo(map);
      music.addTo(map);
      parks.addTo(map);
      photo.addTo(map);
      attractions.addTo(map);

      // PinSearch component, addToMap
      var searchBar = L.control.pinSearch({
        position: 'topright',
        placeholder: 'Search...',
        buttonText: 'Search',
        onSearch: function(query) {
            // console.log('Search query:', query);
            setZoom(17);
            map.setZoom(17);
        },
        searchBarWidth: '200px',
        searchBarHeight: '30px',
        maxSearchResults: 3
      }).addTo(map);

      // layerControl, addToMap
      var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

      // Layers 5 of 5: Add layer  to layerControl
      layerControl.addOverlay(restaurants, "Restaurants");
      layerControl.addOverlay(bars, "Bars & Lounges");
      layerControl.addOverlay(books, "Books");
      layerControl.addOverlay(coffee, "Coffee");
      layerControl.addOverlay(markets, "Markets");
      layerControl.addOverlay(movies, "Movie Theaters");
      layerControl.addOverlay(music, "Music Venues");
      layerControl.addOverlay(parks, "Parks");
      layerControl.addOverlay(photo, "Photo Opp");
      layerControl.addOverlay(attractions, "Attractions");
    }
  }, [zoom]); 

  return (
    <div>

      <link rel="stylesheet" href="https://unpkg.com/leaflet.pinsearch/src/Leaflet.PinSearch.css" crossOrigin="" />

      <script src="https://unpkg.com/leaflet.pinsearch/src/Leaflet.PinSearch.js" crossOrigin=""></script> 


      <div id="map" style={{width: '100%' }}></div>

    </div>
  );
};

export default Leaflet;

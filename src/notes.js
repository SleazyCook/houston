// // Define a list of locations with categories
// const locations = [
//     {
//       name: 'Wells Fargo Plaza',
//       lat: 29.7590,
//       lng: -95.3657,
//       category: 'landmark',
//       iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // map pin icon
//       popupText: 'Wells Fargo Plaza - Downtown Houston'
//     },
//     {
//       name: 'Shell Stadium',
//       lat: 29.7489,
//       lng: -95.3701,
//       category: 'stadium',
//       iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684803.png', // soccer ball icon
//       popupText: 'Shell Stadium - Home of Houston Dynamo & Dash'
//     },
//     {
//       name: 'Hermann Park',
//       lat: 29.7178,
//       lng: -95.4018,
//       category: 'park',
//       iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684853.png', // tree icon (example)
//       popupText: 'Hermann Park - A beautiful urban park in Houston'
//     },
//     // More locations...
//   ];
  
//   // Create layer groups for each category
//   const landmarkLayer = L.layerGroup();
//   const stadiumLayer = L.layerGroup();
//   const parkLayer = L.layerGroup();
  
//   // Loop through locations and add to respective layer group
//   locations.forEach(location => {
//     const customIcon = L.icon({
//       iconUrl: location.iconUrl,
//       iconSize: [38, 38],
//       iconAnchor: [19, 38],
//       popupAnchor: [0, -38],
//     });
  
//     const marker = L.marker([location.lat, location.lng], { icon: customIcon });
//     marker.bindPopup(`<b>${location.name}</b><br>${location.popupText}`);
  
//     // Add the marker to the correct layer based on the category
//     if (location.category === 'landmark') {
//       marker.addTo(landmarkLayer);
//     } else if (location.category === 'stadium') {
//       marker.addTo(stadiumLayer);
//     } else if (location.category === 'park') {
//       marker.addTo(parkLayer);
//     }
//   });
  
//   // Add all the layers to the map
//   landmarkLayer.addTo(map);
//   stadiumLayer.addTo(map);
//   parkLayer.addTo(map);
  
//   // Add layer control to toggle layers on/off
//   L.control.layers(
//     {
//       'Landmarks': landmarkLayer,
//       'Stadiums': stadiumLayer,
//       'Parks': parkLayer,
//     },
//     {},
//     { collapsed: false }
//   ).addTo(map);
  
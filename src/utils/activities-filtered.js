import locations from "../data/locations";

// Utility function to sort items alphabetically by name
const sortByName = (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name));

const activitiesFiltered = {
  all: sortByName(locations.filter(place => place.category !== 'food')),
  bars: sortByName(locations.filter(place => place.category === 'bar')),
  books: sortByName(locations.filter(place => place.category === 'books')),
  coffee: sortByName(locations.filter(place => place.category === 'coffee')),
  markets: sortByName(locations.filter(place => place.category === 'market')),
  movies: sortByName(locations.filter(place => place.category === 'movies')),
  music: sortByName(locations.filter(place => place.category === 'music')),
  parks: sortByName(locations.filter(place => place.category === 'park')),
  photo: sortByName(locations.filter(place => place.category === 'photo')),
  attraction: sortByName(locations.filter(place => place.category === 'attraction')),
};

export default activitiesFiltered;
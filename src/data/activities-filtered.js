import locations from "./locations";

// Utility function to sort items alphabetically by name
const sortByName = (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name));

const activitiesFiltered = {
  all: sortByName(locations.filter(place => place.category !== 'food')),
  bars: sortByName(locations.filter(place => place.category === 'bar')),
  books: sortByName(locations.filter(place => place.category === 'books')),
  markets: sortByName(locations.filter(place => place.category === 'market')),
  movies: sortByName(locations.filter(place => place.category === 'movies')),
  music: sortByName(locations.filter(place => place.category === 'music')),
  parks: sortByName(locations.filter(place => place.category === 'park')),
  photos: sortByName(locations.filter(place => place.category === 'photo')),
};

export default activitiesFiltered;
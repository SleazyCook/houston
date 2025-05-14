import locations from "../data/locations";

const sortByName = (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name));

const restaurantsFiltered = {
  // food: sortByName(locations.filter(place => place.category?.includes('food'))),
  food: sortByName(locations.filter(place => place.subcategory && place.category !== 'attraction')),
  bbq: sortByName(locations.filter(place => place.subcategory?.includes('bbq'))),
  burgers: sortByName(locations.filter(place => place.subcategory?.includes('burgers'))),
  breakfast: sortByName(locations.filter(place => place.subcategory?.includes('breakfast'))),
  chicken: sortByName(locations.filter(place => place.subcategory?.includes('chicken'))),
  crawfish: sortByName(locations.filter(place => place.subcategory?.includes('crawfish'))),
  dessert: sortByName(locations.filter(place => place.subcategory?.includes('dessert'))),
  dumplings: sortByName(locations.filter(place => place.subcategory?.includes('dumplings'))),
  hotdogs: sortByName(locations.filter(place => place.subcategory?.includes('hotdogs'))),
  pizza: sortByName(locations.filter(place => place.subcategory ?.includes('pizza'))),
  pho: sortByName(locations.filter(place => place.subcategory ?.includes('pho'))),
  ramen: sortByName(locations.filter(place => place.subcategory?.includes('ramen'))),
  rice: sortByName(locations.filter(place => place.subcategory?.includes('ricebowl'))),
  sandwiches: sortByName(locations.filter(place => place.subcategory?.includes('sandwiches'))),
  seafood: sortByName(locations.filter(place => place.subcategory?.includes('seafood'))),
  steak: sortByName(locations.filter(place => place.subcategory?.includes('steak'))),
  sushi: sortByName(locations.filter(place => place.subcategory?.includes('sushi'))),
  tacos: sortByName(locations.filter(place => place.subcategory?.includes('tacos'))),
  upscale: sortByName(locations.filter(place => place.subcategory?.includes('upscale'))),
  halls: sortByName(locations.filter(place => place.subcategory?.includes('hall'))),
};

export default restaurantsFiltered;
import locations from "./locations";

const sortByName = (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name));

const restaurantsFiltered = {
  food: sortByName(locations.filter(place => place.category === 'food')),
  burgers: sortByName(locations.filter(place => place.subcategory === 'burgers')),
  breakfast: sortByName(locations.filter(place => place.subcategory === 'breakfast')),
  chicken: sortByName(locations.filter(place => place.subcategory === 'chicken')),
  dessert: sortByName(locations.filter(place => place.subcategory === 'dessert')),
  dumplings: sortByName(locations.filter(place => place.subcategory === 'dumplings')),
  hotdogs: sortByName(locations.filter(place => place.subcategory === 'hotdogs')),
  pizza: sortByName(locations.filter(place => place.subcategory === 'pizza')),
  ramen: sortByName(locations.filter(place => place.subcategory === 'ramen')),
  rice: sortByName(locations.filter(place => place.subcategory === 'ricebowl')),
  sandwiches: sortByName(locations.filter(place => place.subcategory === 'sandwiches')),
  seafood: sortByName(locations.filter(place => place.subcategory === 'seafood')),
  steak: sortByName(locations.filter(place => place.subcategory === 'steak')),
  sushi: sortByName(locations.filter(place => place.subcategory === 'sushi')),
  tacos: sortByName(locations.filter(place => place.subcategory === 'tacos')),
  upscale: sortByName(locations.filter(place => place.subcategory === 'upscale')),
  halls: sortByName(locations.filter(place => place.subcategory === 'hall')),
};

export default restaurantsFiltered;
import { useState } from "react";

import locations from "../data/locations";
import buttonData from "../data/restaurant-types";

const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [title, setTitle] = useState('All Restaurants');

  let category = {}

  // All Restaurants by alpha
  const food = locations.filter(place => place.category === 'food');
  const sortedFood = food.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.food = sortedFood;

  // Burgers
  const burgers = locations.filter(place => place.subcategory === 'burgers');
  const sortedBurgers = burgers.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.burgers = sortedBurgers;
  // Breakfast
  const breakfast = locations.filter(place => place.subcategory === 'breakfast');
  const sortedBreakfast = breakfast.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.breakfast = sortedBreakfast;
  // Chicken
  const chicken = locations.filter(place => place.subcategory === 'chicken');
  const sortedChicken = chicken.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.chicken = sortedChicken;
  // Dessert
  const dessert = locations.filter(place => place.subcategory === 'dessert');
  const sortedDessert = dessert.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.dessert = sortedDessert;
  // Dumplings
  const dumplings = locations.filter(place => place.subcategory === 'dumplings');
  const sortedDumplings = dumplings.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.dumplings = sortedDumplings;
  // Hotdogs
  const hotdogs = locations.filter(place => place.subcategory === 'hotdogs');
  const sortedHotdogs = hotdogs.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.hotdogs = sortedHotdogs;
  // Pizza
  const pizza = locations.filter(place => place.subcategory === 'pizza');
  const sortedPizza = pizza.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.pizza = sortedPizza;
  // Ramen
  const ramen = locations.filter(place => place.subcategory === 'ramen');
  const sortedRamen = ramen.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.ramen = sortedRamen;
  // Rice Bowl
  const rice = locations.filter(place => place.subcategory === 'ricebowl');
  const sortedRice = rice.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.rice = sortedRice;
  // Sandwiches
  const sandwiches = locations.filter(place => place.subcategory === 'sandwiches');
  const sortedSandwiches = sandwiches.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.sandwiches = sortedSandwiches;
  // Seafood
  const seafood = locations.filter(place => place.subcategory === 'seafood');
  const sortedSeafood = seafood.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.seafood = sortedSeafood;
  // Steakhouses
  const steak = locations.filter(place => place.subcategory === 'steak');
  const sortedSteak = steak.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.steak = sortedSteak;
  // Sushi
  const sushi = locations.filter(place => place.subcategory === 'sushi');
  const sortedSushi = sushi.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.sushi = sortedSushi;
  // Tacos
  const tacos = locations.filter(place => place.subcategory === 'tacos');
  const sortedTacos = tacos.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.tacos = sortedTacos;
    // Tacos
  const upscale = locations.filter(place => place.subcategory === 'upscale');
  const sortedUpscale = upscale.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.upscale = sortedUpscale;
  // Food Halls
  const halls = locations.filter(place => place.subcategory === 'hall');
  const sortedHalls = halls.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.halls = sortedHalls;

  // Change display function
  function changeCategory(e) {
    setSelectedCategory(e.target.value);
    setTitle(e.target.name);
  }

    return (
      <div>
        <h1>Food</h1>
        <p>List of my favorite restaurants, trucks, and stands in Houston.</p>

        {buttonData.map((obj, key) => {
          return(
            <button 
              onClick={changeCategory} 
              key={key} 
              value={obj.value} 
              name={obj.label}>
                {obj.label}
            </button>
          )
        })}

        <br /><br />
        <b>{title}</b>

        {category[selectedCategory]?.map((item, key) => {
          return(
            <p key={key}>{key +1}. {item.name}</p>
          )
        })}

      </div>
    );
  };
  
  export default Restaurants;
import { useState } from "react";

import Filters from "../components/Filters";
import Location from "../components/Location";

import buttonData from "../data/restaurant-types";
import restaurantsFiltered from "../utils/restaurants-filtered";

const Restaurants = ({ setLat, setLon, setZoom }) => {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [title, setTitle] = useState('All Restaurants');
  const [selectedFilters, setSelectedFilters] = useState({}); 

  const list = restaurantsFiltered;

  // Handle category change
  const changeCategory = (e) => {
    setSelectedCategory(e.target.value);
    setTitle(e.target.name);
  };

  // Filter restaurants based on selected filters
  const filterRestaurants = (restaurants) => {
    return restaurants.filter((place) => {
      // Check if all selected filters match the badges of the place
      return Object.keys(selectedFilters).every((badgeName) => {
        return selectedFilters[badgeName] ? place.badges?.includes(badgeName) : true;
      });
    });
  };

  // Get the list of restaurants in the selected category
  const categoryRestaurants = restaurantsFiltered[selectedCategory] || [];

  // Apply the filter to the list
  const filteredRestaurants = filterRestaurants(categoryRestaurants);

  // Page Length
  let pageLength = filteredRestaurants.length;

  return (
    <div>
      <h1>{title}</h1>
      <p>List of my favorite restaurants, trucks, and stands in Houston.</p>

      {/* Category Names */}
      {buttonData.map((obj, key) => (
        <button
          onClick={changeCategory}
          key={key}
          value={obj.value}
          name={obj.label}
        >
          {obj.label}
        </button>
      ))}

      {/* Filters Menu */}
      <Filters
        list={list}
        selectedCategory={selectedCategory}
        onFilterChange={setSelectedFilters} // Pass filter change handler
      />

      {/* Page Length */}
      <br /><br />
      <b>{title} ({pageLength})</b>

      {/* Location Component */}
      <div className="location__container">
        {filteredRestaurants.map((item, key) => {
          return (
            <Location
              key={key}
              item={item}
              setLat={setLat}
              setLon={setLon}
              setZoom={setZoom}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;

import { useState, useEffect } from "react";

import Filters from "../components/Filters";
import Location from "../components/Location";

import buttonData from "../data/restaurant-types";
import restaurantsFiltered from "../utils/restaurants-filtered";

const Restaurants = ({ setLat, setLon, setZoom }) => {
  const [selectedCategory, setSelectedCategory] = useState("food");
  const [title, setTitle] = useState(buttonData[0].title);
  const [description, setDescription] = useState(buttonData[0].description)
  const [selectedFilters, setSelectedFilters] = useState({});

  const list = restaurantsFiltered;

  // useEffect(() => {
  //   if ('scrollRestoration' in window.history) {
  //     window.history.scrollRestoration = 'manual';
  //   }
  // }, []);

  // Handle category change
  const changeCategory = (e) => {
    const { value } = e.currentTarget;
    const selectedObj = buttonData.find((obj) => obj.value === value);
    if (selectedObj) {
      setSelectedCategory(e.currentTarget.value);
      setTitle(e.currentTarget.name);
      setDescription(selectedObj.description);
    }
  };

  // Filter restaurants based on selected filters
  const filterRestaurants = (restaurants) => {
    return restaurants.filter((place) => {
      // Check if all selected filters match the badges of the place
      return Object.entries(selectedFilters).every(([badgeName, isChecked]) => {
        if (!isChecked) return true;

        // If the filter is 'free parking', ensure that 'paid parking' is not present
        if (badgeName === "free parking") {
          return !place.badges?.includes("paid parking");
        }

        // Otherwise, check the place's badges for the selected filter
        return place.badges?.includes(badgeName);
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
    <div className='restaurant-listing'>
      <h2 className='listing__header listing__header--food'>
        <span>HouStOn EaTs
          </span></h2>

      {/* Category Names */}
      <div className='category-btn__box'>
        {buttonData.map((obj, key) => (
          <button
            className='category-btn'
            onClick={changeCategory}
            key={key}
            value={obj.value}
            name={obj.title ? obj.title : obj.label}
          >
            <img src={obj.img} alt={obj.label} />
            {obj.label}
          </button>
        ))}
      </div>

      {/* Filters Menu */}
      <Filters
        list={list}
        selectedCategory={selectedCategory}
        onFilterChange={setSelectedFilters} // Pass filter change handler
      />

      {/* Page Length */}
      <div className='category__header'>
        <div className='category__header--title'>
          {title} ({pageLength})</div>
        <div className='category__header--description'>
          {description}</div>
      </div>
      

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

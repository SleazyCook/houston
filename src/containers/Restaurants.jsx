import { useState } from "react";
import { useNavigate } from "react-router-dom";

import locations from "../data/locations";
import buttonData from "../data/restaurant-types";
import restaurantsFiltered from "../data/restaurants-filtered";

const Restaurants = ({ setLat, setLon, setZoom }) => {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [title, setTitle] = useState('All Restaurants');
  const navigate = useNavigate();

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

        {restaurantsFiltered[selectedCategory]?.map((item, key) => {
          const handleClick = () => {
            setLat(item.coordinates[0]);
            setLon(item.coordinates[1]);
            setZoom(17);
            navigate('/'); // go to map page after setting location
          };
          return (
            <div key={key}>
              <p>{key + 1}. {item.name}</p>
              <button onClick={handleClick}>
                View on Map
              </button>
            </div>
          );
        })}

      </div>
    );
  };
  
  export default Restaurants;
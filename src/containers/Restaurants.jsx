import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Location from "../components/Location";

import buttonData from "../data/restaurant-types";
import restaurantsFiltered from "../data/restaurants-filtered";

const Restaurants = ({ setLat, setLon, setZoom }) => {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [title, setTitle] = useState('All Restaurants');

  let pageLength = Object.keys(restaurantsFiltered[selectedCategory]).length

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
        <b>{title} ({pageLength})</b>

        <div className='location__container'>     
          {restaurantsFiltered[selectedCategory]?.map((item, key) => {
            return (
              <Location 
                key={key} 
                item={item} 
                setLat={setLat} 
                setLon={setLon} 
                setZoom={setZoom}/>
            );
          })}
        </div>   

      </div>
    );
  };
  
  export default Restaurants;
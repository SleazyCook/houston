import { useState } from 'react'

import Filters from '../components/Filters';
import Location from '../components/Location';

import buttonData from '../data/activity-types';
import activitiesFiltered from '../utils/activities-filtered';

const Activities = ({ setLat, setLon, setZoom}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [title, setTitle] = useState('All Activities');
  const [selectedFilters, setSelectedFilters] = useState({}); 

  const list = activitiesFiltered;

  // Handle category change
  function changeCategory(e) {
    setSelectedCategory(e.target.value);
    setTitle(e.target.name);
  }

  // Filter activities based on selected filters
  const filterActivities = (activities) => {
    return activities.filter((place) => {
      // Check if all selected filters match the badges of the place
      return Object.keys(selectedFilters).every((badgeName) => {
        return selectedFilters[badgeName] ? place.badges?.includes(badgeName) : true;
      });
    });
  };

  // Get the list of activities in the selected category
  const categoryActivities = activitiesFiltered[selectedCategory] || [];

  // Apply the filter to the list
  const filteredActivities = filterActivities(categoryActivities);

  // Page Length
  let pageLength = filteredActivities.length;

  return (
    <div>
      <h1>Activities</h1>
      <p>List of my favorite activities in Houston.</p>

      {/* Category Names */}
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
      <div className='location__container'>   
        {activitiesFiltered[selectedCategory]?.map((item, key) => {
          return(
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

export default Activities;
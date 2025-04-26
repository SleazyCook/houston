import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import locations from '../data/locations';
import buttonData from '../data/activity-types';
import activitiesFiltered from '../data/activities-filtered';

const Activities = ({ setLat, setLon, setZoom}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [title, setTitle] = useState('All Activities');
  const navigate = useNavigate();

  // Change display function
  function changeCategory(e) {
    setSelectedCategory(e.target.value);
    setTitle(e.target.name);
  }

    return (
      <div>
        <h1>Activities</h1>
        <p>List of my favorite activities in Houston.</p>

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

        {activitiesFiltered[selectedCategory]?.map((item, key) => {
          const handleClick = () => {
            setLat(item.coordinates[0]);
            setLon(item.coordinates[1]);
            setZoom(17);
            navigate('/'); // go to map page after setting location
          };
          return(
            <div key={key}>
              <p>{key + 1}. {item.name}</p>
              <button onClick={handleClick}>
                View on Map
              </button>
            </div>
          )
        })}
      </div>
    );
  };
  
  export default Activities;
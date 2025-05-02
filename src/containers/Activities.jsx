import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Location from '../components/Location';

import buttonData from '../data/activity-types';
import activitiesFiltered from '../data/activities-filtered';

const Activities = ({ setLat, setLon, setZoom}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [title, setTitle] = useState('All Activities');

  let pageLength = Object.keys(activitiesFiltered[selectedCategory]).length

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
        <b>{title} ({pageLength})</b>

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
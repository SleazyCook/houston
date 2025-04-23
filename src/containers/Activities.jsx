import { useState } from 'react'

import locations from '../data/locations';
import buttonData from '../data/activity-types';

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [title, setTitle] = useState('All Activities');

  let category = {}

  // All Activities
  const all = locations.filter(place => place.category !== 'food');
  const sortedAll = all.sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  category.all  = sortedAll;

  // Bars
  const bars = locations.filter(place => place.category === 'bar');
  const sortedBars = bars.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.bars = sortedBars;

  // Bookstores
  const books = locations.filter(place => place.category === 'books');
  const sortedBooks = books.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.books = sortedBooks;

  // Markets
  const markets = locations.filter(place => place.category === 'market');
  const sortedMarkets = markets.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.markets = sortedMarkets;

  // Movie Theaters
  const movies = locations.filter(place => place.category === 'movies');
  const sortedMovies = movies.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.movies = sortedMovies;

  // Music Venues
  const music = locations.filter(place => place.category === 'music');
  const sortedMusic = music.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.music = sortedMusic;

  // Parks
  const parks = locations.filter(place => place.category === 'park');
  const sortedParks = parks.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.parks = sortedParks;

  // Photo Opp
  const photos = locations.filter(place => place.category === 'photo');
  const sortedPhotos = photos.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  category.photos = sortedPhotos;

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

        {category[selectedCategory]?.map((item, key) => {
          return(
            <p key={key}>{key +1}. {item.name}</p>
          )
        })}
      </div>
    );
  };
  
  export default Activities;
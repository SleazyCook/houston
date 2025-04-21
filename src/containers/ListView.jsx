import locations from "../map/locations";

const ListView = () => {

  // All Restaurants by alpha
  const food = locations.filter(place => place.category === 'food');
  const sortedFood = food.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Burgers
  const burgers = locations.filter(place => place.subcategory === 'burgers');
  const sortedBurgers = burgers.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Breakfast
  const breakfast = locations.filter(place => place.subcategory === 'breakfast');
  const sortedBreakfast = breakfast.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Chicken
  const chicken = locations.filter(place => place.subcategory === 'chicken');
  const sortedChicken = chicken.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Dessert
  const dessert = locations.filter(place => place.subcategory === 'dessert');
  const sortedDessert = dessert.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Dumplings
  const dumplings = locations.filter(place => place.subcategory === 'dumplings');
  const sortedDumplings = dumplings.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Hotdogs
  const hotdogs = locations.filter(place => place.subcategory === 'hotdogs');
  const sortedHotdogs = hotdogs.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Pizza
  const pizza = locations.filter(place => place.subcategory === 'pizza');
  const sortedPizza = pizza.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Ramen
  const ramen = locations.filter(place => place.subcategory === 'ramen');
  const sortedRamen = ramen.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Rice Bowl
  const rice = locations.filter(place => place.subcategory === 'rice');
  const sortedRice = rice.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Sandwiches
  const sandwiches = locations.filter(place => place.subcategory === 'sandwiches');
  const sortedSandwiches = sandwiches.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Sushi
  const sushi = locations.filter(place => place.subcategory === 'sushi');
  const sortedSushi = sushi.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // Tacos
  const tacos = locations.filter(place => place.subcategory === 'tacos');
  const sortedTacos = tacos.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Bars by alpha
  const bars = locations.filter(place => place.category === 'bar');
  const sortedBars = bars.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Movie Theaters
  const movies = locations.filter(place => place.category === 'movies');
  const sortedMovies = movies.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Music Venues
  const music = locations.filter(place => place.category === 'music');
  const sortedMusic = music.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // Music Venues by alpha

    return (
      <div>
        <h1>ListView Page</h1>
        <p>This is the ListView page of the app.</p>

        {/* {locations.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })} */}

        <div>All Restaurants</div>
        {sortedFood.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })}

        {/* <br />
        <div>Tacos</div>
        {sortedTacos.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })} */}

        <br />
        <div>Bars & Lounges</div>
        {sortedBars.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })}

        <br />
        <div>Movie Theaters</div>
        {sortedMovies.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })}

        <br />
        <div>Music Venues</div>
        {sortedMusic.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })}

      </div>
    );
  };
  
  export default ListView;
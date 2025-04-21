import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
        <Link to='/'>Map</Link>
        <Link to='/food'>Restaurants</Link>
        <Link to='/activities'>Activities</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  };
  
  export default Navigation;
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div>
        <Link to='/'>Map</Link>
        <Link to='/list'>List View</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  };
  
  export default Navigation;
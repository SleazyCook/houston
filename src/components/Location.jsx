import { useNavigate } from "react-router-dom";

import Badges from "./Badges";

const Location = ({item, setLat, setLon, setZoom}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setLat(item.coordinates[0]);
        setLon(item.coordinates[1]);
        setZoom(17);
        navigate('/'); // go to map page after setting location
      };

    return (
      <div className='location'>

        {/* style inspo: https://www.sixsenses.com/en/hotels-resorts/ */}

        <div className='location__img-box'>
            {/* image - left on desktop, top on mobile */}
            {item.img && item.img.length > 0 && 
                <img 
                    className='location__img'
                    src={item.img} 
                    alt="Item" />}        
        </div>

        <div className='location__details'>
            {/* Neighborhood */}
            <p className='location__details--neighborhood'>
                {item.neighborhood}
            </p>

            {/* Name */}
            <a className='location__details--name' href={item.website} target='_blank'>
                {item.name}
            </a>
            
            {/* Blurb */}
            <p className='location__details--blurb'>
                {item.blurb}
            </p>

            {item.badges && 
                <Badges item={item}/>}

            {/* Desciption */}
            <ul className='location__details--description'>
                <li className='location__details--description-item'>
                    {item.description[0]}
                </li>
                <li className='location__details--description-item'>
                    {item.description[1]}
                </li>
                <li className='location__details--description-item'>
                    {item.description[2]}
                </li>
            </ul>

            <div className='location__btn-box'>
                {/* View on Map */}
                <button 
                    className='location__details--map-btn'
                    onClick={handleClick}>
                        View on Map
                </button>

                {/* Website */}
                <a 
                    className='location__details--site-btn'
                    href={item.website}
                    target='_blank'>
                        View Website
                </a>
            </div>

        </div>

      </div>
    );
  };
  
  export default Location;
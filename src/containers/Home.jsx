import Leaflet from "../map/Leaflet";

const Home = ({lat, lon, zoom}) => {
    return (
      <div>
        <h1>HOME</h1>
        <p>This is the Home page of the app.</p>

        <Leaflet lat={lat} lon={lon} zoom={zoom}/>

      </div>
    );
  };
  
  export default Home;
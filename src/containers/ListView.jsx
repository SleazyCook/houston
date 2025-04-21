import locations from "../map/locations";

const ListView = () => {
    return (
      <div>
        <h1>ListView Page</h1>
        <p>This is the ListView page of the app.</p>

        {locations.map((obj, key) => {
            return(
                <p key={key}>{key + 1}. {obj.name}</p>
            )
        })}
      </div>
    );
  };
  
  export default ListView;
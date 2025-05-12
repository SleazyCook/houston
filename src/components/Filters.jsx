// import { useState, useEffect } from "react";
// import badges from "../data/badges.js"; // Array of { name, img }

// const Filters = ({ list, selectedCategory, onFilterChange }) => {
//   const filteredList = list[selectedCategory] || [];

//   // State to track the selected filters
//   const [selectedFilters, setSelectedFilters] = useState({});

//   // Sync filter state with parent
//   useEffect(() => {
//     onFilterChange(selectedFilters);
//   }, [selectedFilters, onFilterChange]);

//   // Optional: log when list updates
//   useEffect(() => {
//     console.log("List updated:", filteredList);
//   }, [selectedCategory, filteredList]);

//   // Handle checkbox change
//   const handleFilterChange = (badgeName) => {
//     setSelectedFilters((prev) => {
//       const updatedFilters = { ...prev, [badgeName]: !prev[badgeName] };
//       return updatedFilters;
//     });
//   };

//   // Create a map of available badges for filtering
//   const activeBadges = badges
//     .filter((badge) => {
//       if (badge.name === "paid parking") {
//         // Show "free parking" if any place doesn't have "paid parking"
//         return filteredList.some((place) => !place.badges?.includes("paid parking"));
//       }
//       return filteredList.some((place) => place.badges?.includes(badge.name));
//     })
//     .map((badge) => {
//       if (badge.name === "paid parking") {
//         return {
//           name: "free parking",
//           img: badge.img, // You can replace this with a specific "free parking" image
//         };
//       }
//       return badge;
//     });

//   return (
//     <div className="filters">
//       <h3>Filters</h3>
//       {activeBadges.map((badge) => (
//         <div className="filter" key={badge.name}>
//           <input
//             type="checkbox"
//             checked={selectedFilters[badge.name] || false}
//             onChange={() => handleFilterChange(badge.name)}
//           />
//           {/* <img src={badge.img} alt={badge.name} /> */}
//           <span>{badge.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Filters;


import { useState, useEffect } from "react";
import badges from "../data/badges.js"; // Array of { name, img }

const Filters = ({ list, selectedCategory, onFilterChange }) => {
  const filteredList = list[selectedCategory] || [];

  // State to track the selected filters
  const [selectedFilters, setSelectedFilters] = useState({});

  // Sync filter state with parent
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  // Optional: log when list updates
  useEffect(() => {
    console.log("List updated:", filteredList);
  }, [selectedCategory, filteredList]);

  // Handle checkbox change
  const handleFilterChange = (badgeName) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev, [badgeName]: !prev[badgeName] };
      return updatedFilters;
    });
  };

  // Determine if there are places with paid parking and places without it
  const hasPaidParking = filteredList.some((place) =>
    place.badges?.includes("paid parking")
  );
  const hasFreeParkingOption = filteredList.some(
    (place) => !place.badges?.includes("paid parking")
  );

  // Create a map of available badges for filtering
  const activeBadges = badges
    .filter((badge) => {
      // Show "free parking" filter only if there are places with "paid parking" and places without it
      if (badge.name === "paid parking") {
        return hasPaidParking && hasFreeParkingOption;
      }
      return filteredList.some((place) => place.badges?.includes(badge.name));
    })
    .map((badge) => {
      // If the badge is "paid parking", we will display "free parking"
      if (badge.name === "paid parking") {
        return {
          name: "free parking",
          img: badge.img, // You can replace this with a specific "free parking" image
        };
      }
      return badge;
    });

  return (
    <div className="filters">
      <h3>Filters</h3>
      {activeBadges.map((badge) => (
        <div className="filter" key={badge.name}>
          <input
            type="checkbox"
            checked={selectedFilters[badge.name] || false}
            onChange={() => handleFilterChange(badge.name)}
          />
          {/* <img src={badge.img} alt={badge.name} /> */}
          <span>{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Filters;

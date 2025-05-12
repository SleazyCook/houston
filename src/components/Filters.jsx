// import { useState, useEffect } from "react";
// import badges from "../data/badges.js"; // Array of { name, img }

// const Filters = ({ list, selectedCategory, onFilterChange }) => {
//     const filteredList = list[selectedCategory] || [];

//     // State to track the selected filters
//     const [selectedFilters, setSelectedFilters] = useState({});

//     // Sync filter state with parent
//     useEffect(() => {
//         onFilterChange(selectedFilters);
//     }, [selectedFilters, onFilterChange]);

//     // Optional: log when list updates
//     useEffect(() => {
//         console.log("List updated:", filteredList);
//     }, [selectedCategory, filteredList]);

//     // Handle checkbox change
//     const handleFilterChange = (badgeName) => {
//         setSelectedFilters((prev) => {
//         const updatedFilters = { ...prev, [badgeName]: !prev[badgeName] };
//         return updatedFilters;
//         });
//     };

//     // Determine if there are places with paid parking and places without it
//     const hasPaidParking = filteredList.some((place) =>
//         place.badges?.includes("paid parking")
//     );
//     const hasFreeParkingOption = filteredList.some(
//         (place) => !place.badges?.includes("paid parking")
//     );

//     // Create a map of available badges for filtering
//     const activeBadges = badges
//         .filter((badge) => {
//         // Show "free parking" filter only if there are places with "paid parking" and places without it
//         if (badge.name === "paid parking") {
//             return hasPaidParking && hasFreeParkingOption;
//         }
//         return filteredList.some((place) => place.badges?.includes(badge.name));
//         })
//         .map((badge) => {
//         // If the badge is "paid parking", we will display "free parking"
//         if (badge.name === "paid parking") {
//             return {
//             name: "free parking",
//             img: badge.img, // You can replace this with a specific "free parking" image
//             };
//         }
//         return badge;
//     });

//     // If no filters are available, render nothing
//     if (activeBadges.length === 0) {
//         return null;
//     }

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

  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  useEffect(() => {
    console.log("List updated:", filteredList);
  }, [selectedCategory, filteredList]);

  const handleFilterChange = (badgeName) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [badgeName]: !prev[badgeName],
    }));
  };

  const hasPaidParking = filteredList.some((place) =>
    place.badges?.includes("paid parking")
  );
  const hasFreeParkingOption = filteredList.some(
    (place) => !place.badges?.includes("paid parking")
  );

  const activeBadges = badges
    .filter((badge) => {
      // Special handling for 'paid parking' => display 'free parking'
      if (badge.name === "paid parking") {
        return hasPaidParking && hasFreeParkingOption;
      }

      // Badge must exist on at least one place
      const appearsSomewhere = filteredList.some((place) =>
        place.badges?.includes(badge.name)
      );

      // If badge appears on all places, don't include it
      const appearsEverywhere =
        appearsSomewhere &&
        filteredList.every((place) => place.badges?.includes(badge.name));

      return appearsSomewhere && !appearsEverywhere;
    })
    .map((badge) => {
      if (badge.name === "paid parking") {
        return {
          name: "free parking",
          img: badge.img,
        };
      }
      return badge;
    });

  if (activeBadges.length === 0) {
    return null;
  }

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

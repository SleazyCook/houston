import { useState, useEffect } from "react";
import badges from "../data/badges.js"; // Array of { name, img }

const Filters = ({ list, selectedCategory, onFilterChange }) => {
  const filteredList = list[selectedCategory] || [];

  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedCategory, selectedFilters, filteredList, onFilterChange]);


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
      if (badge.name === "cash only") {
        return false; // Exclude 'cash only' completely
      }

      // Special handling for 'paid parking' => display 'free parking'
      if (badge.name === "paid parking") {
        return hasPaidParking && hasFreeParkingOption;
      }

      const appearsSomewhere = filteredList.some((place) =>
        place.badges?.includes(badge.name)
      );

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
      {activeBadges.map((badge) => (
        <label className="filter" key={badge.name}>
          <input
            type="checkbox"
            checked={selectedFilters[badge.name] || false}
            onChange={() => handleFilterChange(badge.name)}
          />
          <span>
            {badge.img && <img src={badge.img} alt={badge.name} />}
            {badge.name !== 'open late' && badge.name}
          </span>
        </label>

      ))}
    </div>


  );
};

export default Filters;

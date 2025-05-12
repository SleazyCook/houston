import { useState, useEffect } from "react";
import badges from "../data/badges.js"; // Array of { name, img }

const Filters = ({ list, selectedCategory, onFilterChange }) => {
  const filteredList = list[selectedCategory] || [];

  // State to track the selected filters
  const [selectedFilters, setSelectedFilters] = useState({});

  // Optional: log when list updates
  useEffect(() => {
    console.log('List updated:', filteredList);
  }, [selectedCategory, filteredList]);

  // Handle checkbox change
  const handleFilterChange = (badgeName) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev, [badgeName]: !prev[badgeName] };
      // Pass updated filters back to the parent component
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  // Create a map of available badges for filtering
  const activeBadges = badges.filter(badge =>
    filteredList.some(place => place.badges?.includes(badge.name))
  );

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

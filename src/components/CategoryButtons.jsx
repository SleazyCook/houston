import { useRef } from 'react';

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function CategoryButtons({ buttonData, changeCategory }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="category-slider-wrapper">
      {/* Scroll Left Button */}
      <button className="scroll-btn left" onClick={scrollLeft}>
        <MdChevronLeft />
      </button>

      {/* Category Buttons */}
      <div className="category-btn__box scroll-container" ref={scrollRef}>
        {buttonData.map((obj, key) => (
          <button
            className="category-btn"
            onClick={changeCategory}
            key={key}
            value={obj.value}
            name={obj.title ? obj.title : obj.label}
          >
            <img src={obj.img} alt={obj.label} />
            {obj.label}
          </button>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button className="scroll-btn right" onClick={scrollRight}>
        <MdChevronRight />
      </button>
    </div>
  );
}

export default CategoryButtons;
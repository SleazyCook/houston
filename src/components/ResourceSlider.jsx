const ResourceSlider = ({ title, items }) => {
  return (
    <>
      <div className='resources__subheader'>
        {title}
      </div>
      <div className='resources__slider'>
        {items.map((item, index) => (
          <a
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className='resources__slider-item'
            key={index}
          >
            <img src={item.img} alt={`${item.title} logo`} />
            <span>{item.title}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default ResourceSlider;

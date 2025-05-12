import slugify from 'slugify';

const generateLocationSlug = (location) => {
    const nameSlug = slugify(location.name, { lower: true });
    const coordSlug = location.coordinates
      .map(c => Number(c).toFixed(5).replace('.', ''))
      .join('-');
    return `${nameSlug}-${coordSlug}`;
  };

export default generateLocationSlug;
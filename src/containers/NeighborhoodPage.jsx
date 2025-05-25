import { Link, useParams } from 'react-router-dom';

import Location from '../components/Location';

import locations from '../data/locations';
import neighborhoodBlurbs from '../data/neighborhoods';

const slugify = (text) => {
  if (typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const NeighborhoodPage = ({ setLat, setLon, setZoom }) => {
  const { slug } = useParams();

  const matched = locations.find(
    (loc) => slugify(loc.neighborhood) === slug
  );

  if (!matched) return <div>Neighborhood not found.</div>;

  const allInNeighborhood = locations
    .filter((loc) => loc.neighborhood === matched.neighborhood)
    .sort((a, b) => a.name.localeCompare(b.name));

  const blurbObj = neighborhoodBlurbs.find(
    (item) => item.name === matched.neighborhood
  );

  if (!blurbObj) {
    console.log(matched.neighborhood, 'not found in blurbs data page');
  }

  return (
    <div className='neighborhood-details-page'>
      {/* Title & Blurb */}
      <h2 className='neighborhood-details__title'>
        {matched.neighborhood}&nbsp;
        {allInNeighborhood.length > 0 && (
          <span>({allInNeighborhood.length})</span>
        )}
      </h2>
      <p className='neighborhood-details__blurb'>
        {blurbObj?.blurb?.length && blurbObj.blurb}
      </p>

      {/* Nearby */}
      {blurbObj?.nearby?.length > 0 && (
        <>
          <div className='neighborhoods__nearby--title'>
            Nearby Neighborhoods
          </div>
          <ul className='neighborhoods neighborhoods__nearby'>
            {blurbObj.nearby.map((item, key) => {
              const slug = item.toLowerCase().replace(/\s+/g, '-');
              const nearbyBlurb = neighborhoodBlurbs.find(
                (n) => n.name === item
              );
              const Icon = nearbyBlurb?.icon;

              return (
                <li className='neighborhood' key={key}>
                  <Link to={`/neighborhoods/${slug}`}>
                    {item} {Icon && <Icon />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}

      <div className='location__container'>
        {allInNeighborhood.map((item, key) => {
          return (
            <Location
              key={key}
              item={item}
              setLat={setLat}
              setLon={setLon}
              setZoom={setZoom}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NeighborhoodPage;

import { useParams } from 'react-router-dom';

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

    const matched = locations.find(loc => 
        slugify(loc.neighborhood) === slug
    );

    // using neighborhood name to find full location data
    const allInNeighborhood = locations
        .filter(loc => loc.neighborhood === matched.neighborhood)
        .sort((a, b) => a.name.localeCompare(b.name));

    console.log('All locations in this neighborhood:', allInNeighborhood);

    // connect blurb data based on neighborhood name
    const blurbObj = neighborhoodBlurbs.find(
        (item) => item.name === matched.neighborhood
    );
    if (blurbObj) {
        console.log(blurbObj.blurb);
    } else {
        console.log(matched.neighborhood, 'not found in blurbs data page');
    }

    // Issue loading neighborhood from Neighborhoods page
    if (!matched) return <div>Neighborhood not found.</div>;

    return (
        <div>
            <h1>{matched.neighborhood}</h1>
            <p>{blurbObj.blurb.length && blurbObj.blurb}</p>

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
                    )
                })}
            </div>
        </div>
    );
};

export default NeighborhoodPage;
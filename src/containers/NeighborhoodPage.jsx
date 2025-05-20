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

    const matched = locations.find(loc => 
        slugify(loc.neighborhood) === slug
    );

    // using neighborhood name to find full location data
    const allInNeighborhood = locations
        .filter(loc => loc.neighborhood === matched.neighborhood)
        .sort((a, b) => a.name.localeCompare(b.name));

    // connect blurb data based on neighborhood name
    const blurbObj = neighborhoodBlurbs.find(
        (item) => item.name === matched.neighborhood
    );
    if (blurbObj) {
        // console.log(blurbObj.blurb);
    } else {
        console.log(matched.neighborhood, 'not found in blurbs data page');
    }

    // Issue loading neighborhood from Neighborhoods page
    if (!matched) return <div>Neighborhood not found.</div>;

    // console.log(allInNeighborhood.length)

    return (
        <div className='neighborhood-details-page'>
            {/* Title & Blurb */}
            <h2 className='neighborhood-details__title'>
                {matched.neighborhood}&nbsp;
                {allInNeighborhood.length && <span>({allInNeighborhood.length})</span>}
            </h2>
            <p className='neighborhood-details__blurb'>{blurbObj.blurb.length && blurbObj.blurb}</p>
            {/* Nearby */}
            {blurbObj?.nearby?.length > 0 && (
                <>
                    <div className='neighborhoods__nearby--title'>
                        Nearby Neighborhoods</div>
                    <ul className='neighborhoods neighborhoods__nearby'>
                    {blurbObj.nearby.map((item, key) => {
                        const slug = item.toLowerCase().replace(/\s+/g, '-');
                        return (
                        <li className='neighborhood' key={key}>
                            <Link to={`/neighborhoods/${slug}`}>
                                {item}
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
                    )
                })}
            </div>
        </div>
    );
};

export default NeighborhoodPage;
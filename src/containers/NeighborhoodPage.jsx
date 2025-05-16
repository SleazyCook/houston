import { useParams } from 'react-router-dom';


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

const NeighborhoodPage = () => {
    const { slug } = useParams();

    const matched = locations.find(loc => 
        slugify(loc.neighborhood) === slug
    );

    const allInNeighborhood = locations.filter(loc =>
        loc.neighborhood === matched.neighborhood
    );
    console.log('All locations in this neighborhood:', allInNeighborhood);


// const blurbObj = neighborhoodBlurbs.find(
//   (item) => item.name === neighborhoodName
// );

// if (blurbObj) {
//   console.log(blurbObj.blurb);
// } else {
//   console.log('Neighborhood not found');
// }

    if (!matched) return <div>Neighborhood not found.</div>;

    return (
        <div>
            <h1>{matched.neighborhood}</h1>
        </div>
    );
};

export default NeighborhoodPage;
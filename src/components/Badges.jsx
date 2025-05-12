import badges from '../data/badges.js';

const Badges = ({ item }) => {
    return (
        <div className='location__badges'>
            {item.badges?.map((badgeName, id) => {
                const badge = badges.find(badge => badge.name === badgeName);

                return badge ? (
                    <img key={id} src={badge.img} alt={badge.name} />
                ) : null; 
            })}
        </div>
    );
};

export default Badges;
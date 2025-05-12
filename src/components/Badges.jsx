import badges from '../data/badges.js'

const Badges = ({item}) => {
    return(
        <div className='location__badges'>
            {item.badges?.map((item, id) => {
                const badgeSrc = badges[item]; // Dynamic lookup
                return (
                    <img key={id} src={badgeSrc} alt={item} />
                )
            })}
        </div>
    )
}

export default Badges;
import { events, schedules, music, sports, creators } from '../data/resources.js'

import { FaTiktok, FaYoutube, FaInstagram, FaFacebook, FaSnapchat, FaPinterest, FaTwitter  } from 'react-icons/fa';

const Resources = () => {

  const iconMap = {
    tiktok: FaTiktok,
    youtube: FaYoutube,
    instagram: FaInstagram,
    facebook: FaFacebook,
    snapchat: FaSnapchat,
    pinterest: FaPinterest,
    twitter: FaTwitter 
  };

  return (
    <div className='resources'>
      <h1>Resources</h1>
      
      {/* Events */}
      <div className='resources__subheader'>
        Events in Town
      </div>
      <div className='resources__slider'>
        {events.map((item, index) => {
          return(
            <a href={item.url} target='_blank' className='resources__slider-item' key={index}>
              <img src={item.img} alt={`${item.title} logo`} />
              <span>{item.title}</span>
            </a>
          )
        })}
      </div>

      {/* Local Schedules */}
      <div className='resources__subheader'>
        Events by Org
      </div>
      <div className='resources__slider'>
        {schedules.map((item, index) => {
          return(
            <a href={item.url} target='_blank' className='resources__slider-item' key={index}>
              <img src={item.img} alt={`${item.title} logo`} />
              <span>{item.title}</span>
            </a>
          )
        })}
      </div>

      {/* Professional Sports */}
      <div className='resources__subheader'>
        Professional Sports
      </div>
      <div className='resources__slider'>
        {sports.map((item, index) => {
          return(
            <a href={item.url} target='_blank' className='resources__slider-item' key={index}>
              <img src={item.img} alt={`${item.title} logo`} />
              <span>{item.title}</span>
            </a>
          )
        })}
      </div>      
      
      {/* Concert Tickets */}
      <div className='resources__subheader'>
        Ticket Apps
      </div>
      <div className='resources__slider'>
        {music.map((item, index) => {
          return(
            <a href={item.url} target='_blank' className='resources__slider-item' key={index}>
              <img src={item.img} alt={`${item.title} logo`} />
              <span>{item.title}</span>
            </a>
          )
        })}
      </div>

      {/* Creators */}
        <div className='resources__subheader'>
          Local Creators
        </div>
      <div className='resources__slider'>
        {creators.map((item, index) => {
          return (
            <div className='creator' key={index}>
              {/* Image */}
              <img src={item.img} alt={`${item.name}'s profile photo`} className='creator__img'/>

              {/* Name */}
              <div className='creator__name'>{item.name}</div>

              {/* Handle */}
              <div className='creator__handle'>{item.handle}</div>

              {/* Link Icons */}
              <div className="creator__socials">
              {Object.entries(item.links || {}).map(([key, url]) => {
                const IconComponent = iconMap[key];
                  return IconComponent ? (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" className='creator__socials--link'>
                    <IconComponent  />
                  </a>
                ) : null;
              })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
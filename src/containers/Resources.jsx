import { events, schedules, community, music, sports, creators } from '../data/resources.js'

import { FaTiktok, FaYoutube, FaInstagram, FaFacebook, FaSnapchat, FaPinterest, FaTwitter  } from 'react-icons/fa';

import ResourceSlider from '../components/ResourceSlider.jsx';
import ContactForm from '../components/ContactForm.jsx';

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
      <ResourceSlider title='Events in Town' items={events} />
      <ResourceSlider title='Events by Org' items={schedules} />


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

      <ResourceSlider title='Community' items={community} />
      <ResourceSlider title='Professional Sports' items={sports} />  
      <ResourceSlider title='Ticket Apps' items={music} />

      <ContactForm />



    </div>
  );
};

export default Resources;
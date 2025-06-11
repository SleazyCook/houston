const Footer = () => {
    return (
      <div className='footer'>

        <div className='footer__acknowledgements'>
          <p>
            This site is a personal project designed to promote Drew's favorite places in Houston, TX.

          </p>
          <span className='footer__line'></span>
          <p>
            <a href="https://react.dev" target="_blank">
              Built with React</a> |&nbsp;
            <a href="https://leafletjs.com" target="_blank">
              Leaflet Map API</a> |&nbsp;
            <a href="https://www.netlify.com" target="_blank">
              Hosted by Netlify</a></p>
        </div>

        <span className='footer__line'></span>

                    {/* <span className='footer__art-credit'>
            Homepage artwork by&nbsp;
              <a href='https://www.etsy.com/shop/JimKoehnArtSpace' target='_blank'>
                Jim Koehn</a></span> */}


        <a 
          className='footer__signature'
          href='http://drewford.dev' 
          target='_blank'
          rel='noreferrer'>
            Developed by&nbsp;
            <span className='footer__author'>
               Drewford</span>
        </a>
      </div>
    );
  };
  
  export default Footer;
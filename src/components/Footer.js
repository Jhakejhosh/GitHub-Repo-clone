import React from 'react';
import { FaLightbulb, FaWifi } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer>
      <div className='write'>
          <div className='bulb'>
          <FaLightbulb/> <h5>ProTip !</h5><p>The feed shows you events from people you <a href='#'>follow</a> and repositories you <a href="#">watch</a></p>
          </div>
          <div className='sub'>
            <FaWifi/> <p>Subscribe to your news feed</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;

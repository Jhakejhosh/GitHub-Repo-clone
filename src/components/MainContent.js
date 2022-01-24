import React from 'react';
import Feeds from './Feeds';
import Repos from "./Repos"

const MainContent = () => {
  return (
      <div className='main'>
         <Repos/>
         <Feeds/>
      </div>
  );
};

export default MainContent;

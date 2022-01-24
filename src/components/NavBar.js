import React, { useState } from 'react';
import { FaGithub, FaSearch, FaBars, FaTimes } from "react-icons/fa"
import { useGlobalContext } from '../Context';

const NavBar = () => {

    const [closeNav, setClosenav] = useState(false);
    const {inputUsername, setInputUsername, displayClick } = useGlobalContext()


  return (
      <div className='nav'>
          <div className='nav-menu'>
             <FaGithub className='gitHub'/> 
             <ul className={closeNav ? "header-list active" : "header-list"}>
                <li>Full Request</li>
                <li>News</li>
                <li>Explore</li>
             </ul>
          </div>
          <div className='input'>
              <input type="text" placeholder='Search for user' value={inputUsername}
              onChange={e =>setInputUsername(e.target.value)}/>
              <button type='submit' className='search' onClick={displayClick}>
                  <FaSearch className='searchBar'/>
              </button>
          </div>
          <button className='fabar' onClick={() => setClosenav(!closeNav)}>
              {closeNav ? <FaTimes className='faBar'/> : <FaBars className='faBar'/>}
          </button>
      </div>
  );
};

export default NavBar;

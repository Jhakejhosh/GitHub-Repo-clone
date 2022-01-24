import React from 'react';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';
import { useGlobalContext } from '../Context';

const Loader = () => {

    const [ifLoader, setIfLoader] = useState(true);
    const { inputUsername, setInputUsername, displayClick } = useGlobalContext();

    const removeModal = (e) => {
        e.preventDefault();
        displayClick(e);
        setIfLoader(false)
    }

  return (
      <>
         {
            ifLoader && 
            <div className='loader'>
          <div className='modal'>
              <header>
                  <FaGithub className='github'/>
                  <span>GitHub</span>
              </header>
              <div className='modalInput'>
                  <input type="text" placeholder='Enter your username...' value={inputUsername} onChange={e =>setInputUsername(e.target.value)}/>
                  <button type='submit' onClick={removeModal}><FaSearch/></button>
              </div>
          </div>
      </div>
         }
      </>
      
  );
};

export default Loader;

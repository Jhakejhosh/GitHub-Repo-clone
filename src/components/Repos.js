import React from 'react';
import { FaBook } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const Repos = () => {
    const { displayUser } = useGlobalContext()
  return (
      <div className='repo-main'>
          <header>
              <h3>Repositories</h3>
              <button><FaBook className='faBook'/>New</button>
          </header>
          <input type="text" placeholder='Find a repository'/>
          <div className='repos-list'>
          {
              displayUser.map(user => {
                  return (
                      <ul className="repo-list" key={user.id}>
                           <li><a href={user.html_url}>{user.full_name}</a></li>
                      </ul>
                  )
              })
          }
          </div>
          <div className='recent'>
              <h3>Recent activity</h3>
              <div className='content'>
                  <p>When you take actions across GitHub, we'll provide links to that activity here</p>
              </div>
          </div>
      </div>
  );
};

export default Repos;

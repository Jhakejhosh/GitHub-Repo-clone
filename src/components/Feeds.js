import React from 'react';
import { FaLocationArrow, FaStar } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const Feeds = () => {

  const { displayOwner} = useGlobalContext();

  return (
    <div className='feed-main'>
        <h3>Your Feed</h3>
        <div className='feed-details'>
            <header>
              <div className='feed-intro'>
              <img src={displayOwner.avatar_url} alt='owner' className='avatar'/>
              <p>{displayOwner.followers}<a href={displayOwner.followers_url}>follower</a> . {displayOwner.following}<a href={displayOwner.following_url}>following</a></p>
              </div>
              <small>{displayOwner.created_at}</small>
            </header>
        </div>

        <div className='feed-details'>
            <header>
              <div className='feed-point'>
              <h4>{displayOwner.login}</h4><br></br>
              <small>Repositories <span>{displayOwner.public_repos}</span></small>
              </div>
              <small>{displayOwner.updated_at}</small>
            </header>
            <div className="footer">
              <p><a href={displayOwner.html_url}> Language</a></p>
              <button className='starred'><a href={displayOwner.starred_url}><FaStar/> Starred</a></button>
            </div>
        </div>

        <div className='feed-details'>
            <header>
              <div className='feed-int'>
              <h4><a href={displayOwner.blog}>Check blog</a></h4>
              <p className='red'></p>
              </div>
              <small><FaLocationArrow/> {displayOwner.location}</small>
            </header>
        </div>

    </div>
  );
};

export default Feeds;

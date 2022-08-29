import React from 'react';
import PostList from '../components/posts/PostList';
import "../styles/HomePage.css"
import rena from '../assets/images/rena.jpg'
import { useState } from 'react';

const HomePage = () => {

  return (
    <div className='main'>
      <div className='sidebar'>
        <div className='head-links'>
          <div className='active'><span>Recommendations</span></div>
          <div><span>Followed</span></div>
          <div><span>Favorites</span></div>
        </div>
        <div className='head-links rec-accounts'>
          <p>Recommended accounts</p>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
        </div>
        <div className='categories-block'>
          <p>Categories</p>
          <div className="categories">
            <div className="category">
              travel
            </div>
            <div className="category">
              nsfw
            </div>
            <div className="category">
              funny
            </div>
            <div className="category">
              dogs
            </div>
            <div className="category">
              some long ass category
            </div>
          </div>
        </div>
        <div className="footer">
          <div className='footer-section'>
            <p>Information</p>
            <p>News</p>
            <p>Contacts</p>
          </div>
          <div className='footer-section'>
            <p>For fun only</p>
            <p>Advertising</p>
            <p>Developers</p>
          </div>
          <div className='footer-section'>
            <p>Help</p>
            <p>Security</p>
            <p>Rules</p>
            <p>Something else</p>
          </div>
          <p>© 2022 viewo</p>
        </div>
      </div>
      <div className='scrollbar'>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
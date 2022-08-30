import React from 'react';
import PostList from '../components/posts/PostList';
import "../styles/HomePage.css"

import SideBar from '../components/SideBar';

const HomePage = () => {

  return (
    <div className='main'>
        <SideBar />
      <div className='scrollbar'>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
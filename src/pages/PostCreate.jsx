import React from 'react';
import AddPost from '../components/posts/AddPost';
import SideBar from '../components/SideBar';
import '../styles/PostCreate.css'

const PostCreate = () => {
  return (
    <div className='main'>
      <SideBar />
      <div className="creation-container">
        <AddPost />
      </div>
    </div>
  );
};

export default PostCreate;
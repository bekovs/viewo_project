import React from 'react';
import AddPost from '../components/posts/AddPost';
import SideBar from '../components/SideBar';
import '../styles/PostCreate.css'

const PostCreate = () => {

  const isAuth = () => {
    return localStorage.getItem("email") ? true : false
  }

  return (
    isAuth() ? 
    <div className='main'>
      <SideBar />
      <div className="creation-container">
        <AddPost />
      </div>
    </div>
    :
    <div className='main'>
      <SideBar />
      <div className="creation-container">
        <h2>You need to Log In for creating content</h2>
      </div>
    </div>
  );
};

export default PostCreate;
import React from 'react';
import PostCard from './PostCard';
import vid from '../../assets/media/road.MOV'
import vid1 from '../../assets/media/cat.MOV'

const PostList = () => {
  return (
    <div className='post-list'>
      <PostCard vid={vid}/>
      <PostCard vid={vid1}/>
      <PostCard vid={vid}/>
    </div>
  );
};

export default PostList;
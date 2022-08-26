import React from 'react';
import PostCard from './PostCard';

const PostList = () => {
  return (
    <div className='post-list'>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostList;
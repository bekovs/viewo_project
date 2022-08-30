import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { usePost } from '../../context/PostContextProvider';

const PostList = () => {

  const { getPosts, posts } = usePost();

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className='post-list'>
      {
        posts.length > 0 ?
          posts.map((post, index) => (
            <PostCard post={post} key={index}/>
          ))
          :
          <h3 style={{marginTop: '30px'}}>Loading...</h3>
      }
    </div>
  );
};

export default PostList;
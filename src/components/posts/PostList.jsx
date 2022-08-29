import React, { useEffect } from 'react';
import PostCard from './PostCard';
import vid from '../../assets/media/road.MOV'
import vid1 from '../../assets/media/cat.MOV'
import { usePost } from '../../context/PostContextProvider';

const PostList = () => {

  const { getPosts, addPost } = usePost();

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='post-list'>
      <button onClick={()=>addPost()}>add post</button>
      <PostCard vid={vid}/>
      <PostCard vid={vid1}/>
      <PostCard vid={vid}/>
    </div>
  );
};

export default PostList;
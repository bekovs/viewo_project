import React from 'react';
import { useState } from 'react';
import { usePost } from '../../context/PostContextProvider';

const AddPost = () => {

  const { addPost } = usePost();

  const [post, setPost] = useState({
    title: '',
    description: '',
    video: '',
    categories: [],
  });

  const handleInp = (e) => {
    if (e.target.id === "video") {
      setPost({
        ...post,
        [e.target.id]: e.target.files[0],
      });
    } else if (e.target.id === "categories") {
      setPost({
        ...post,
        [e.target.id]: [],
      });
    } else {
      setPost({
        ...post,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSave = (post) => {
    let newPost = new FormData();
    newPost.append("title", post.title);
    newPost.append("description", post.description);
    newPost.append("category", post.category);
    newPost.append("video", post.video);
    addPost(newPost);
  }

  return (
    <div className='creation'>
      <h2>Upload new post</h2>
      <div className="inputs-container">
        <div className="add-post__input">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(e) => handleInp(e)} />
        </div>
        <div className="add-post__input">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" onChange={(e) => handleInp(e)} />
        </div>
        <div className="add-post__input">
          <label htmlFor="video" className='video-upload__btn'>Video upload</label>
          <input type="file" accept="video/*" id="video" onChange={(e) => handleInp(e)} style={{display: "none"}} />
        </div>
        <button onClick={() => handleSave(post)} className="save__upload-btn">Save</button>
      </div>
    </div>
  );
};

export default AddPost;
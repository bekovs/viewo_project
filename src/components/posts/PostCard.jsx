import React from 'react';
import rena from '../../assets/images/rena.jpg'

const PostCard = ({post}) => {
  return (
    <div className='post'>
      <div className='user-info'>
        <div className='user-info__head'>
          <img src={post.user_image} alt="avatar" />
          <div>
            <p className='user-name'>{post.user}</p>
            <p className='post-title'>{post.description}</p>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <div className='post-info'>
        <video src={post.video} loop disablePictureInPicture controls>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='post-actions'>
        <div className="like"></div>
        <div className="comment"></div>
      </div>
    </div>
  );
};

export default PostCard;
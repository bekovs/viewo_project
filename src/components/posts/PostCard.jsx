import React from 'react';
import rena from '../../assets/images/rena.jpg'

const PostCard = ({vid}) => {
  return (
    <div className='post'>
      <div className='user-info'>
        <div className='user-info__head'>
          <img src={rena} alt="avatar" />
          <div>
            <p className='user-name'>rena228</p>
            <p className='post-title'>post title</p>
          </div>
        </div>
        <button>Follow</button>
      </div>
      <div className='post-info'>
        <video src={vid} loop disablePictureInPicture controls>
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
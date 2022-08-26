import React from 'react';
// import vid from '../../assets/media/.mp4';
import rena from '../../assets/images/rena.jpg'
import vid from '../../assets/media/cat.MOV'

const PostCard = () => {
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
        <button>follow</button>
      </div>
      <div className='post-info'>
        <video src={vid} loop autoPlay controls>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PostCard;
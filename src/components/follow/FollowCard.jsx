import React from 'react';

const FollowCard = ({ profile }) => {
  console.log(profile)
  return (
    <>
      <div className="follower__block">
        <a>
          <div className="follower__avatar">
            <img src={profile.following_user_image ? profile.following_user_image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9h_WR5WgI-kABsR2M2WOO_EIhXYrP6r7M-HKltk&s"} alt="" />
          </div>
          <div className="follower__username">{profile.following_username}</div>
        </a>
      </div>
    </>
  );
};

export default FollowCard;
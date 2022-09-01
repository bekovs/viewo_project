import React from 'react';

const FollowCard = ({ profile }) => {
  console.log(profile)
  return (
    <>
      <div className="follower__block">
        <a>
          <div className="follower__avatar">
            <img src="https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=540&q=75&fit=crop&ar=16%3A9&fm=webp&exp=-10" alt="" />
          </div>
          <div className="follower__username">{profile.username}</div>
        </a>
      </div>
    </>
  );
};

export default FollowCard;
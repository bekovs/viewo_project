import React from 'react';
import ProfileVideoCard from '../components/ProfileVideoCard';
import "../styles/userProfilePage.css"

const UserProfilePage = () => {
  return <div id='wrapper' style={{ display: "flex" }}>
    <aside style={{ width: "20vw",  backgroundColor: "green" }}></aside>
    <main style={{ width: "80vw",  backgroundColor: "#FEC9DD" }} className="profile__block">
      <div className="profile__header">
        <div className="profile__header_top">
          <div className="profile__header-top_card">
            <span className='profile__avatar_wrapper'>
              <img className="profile__avatar" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/74232ad156c51fa34369d71fd7fb258d.jpeg?x-expires=1661659200&x-signature=6ndoyvbHuryfiUWjhjYaBhqUb%2F8%3D" alt="" />
            </span>
            <div className="profile__title-container">
              <div className="profile__title_user">
                <div className="profile__title_username">
                  haositofficial
                </div>
                <div className="profile__title_name">
                  HaositOfficial
                </div>
              </div>
              <div className="profile__btn-subscribe">
                <button>
                  Подписаться
                </button>
              </div>
              <div className="profile__btn-subscribed_list">
                <button className='profile__btn-subscribed_item'>Сообщение</button>
                <button className='profile__btn-subscribed_item'>
                  <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0001 13C13.0001 9.68629 15.6864 7 19.0001 7C22.3139 7 25.0001 9.68629 25.0001 13C25.0001 16.3137 22.3139 19 19.0001 19C15.6864 19 13.0001 16.3137 13.0001 13ZM19.0001 3C13.4773 3 9.00015 7.47715 9.00015 13C9.00015 18.5228 13.4773 23 19.0001 23C24.523 23 29.0001 18.5228 29.0001 13C29.0001 7.47715 24.523 3 19.0001 3ZM5.19435 40.9681C6.70152 35.5144 10.0886 32.2352 13.9162 30.738C17.7125 29.2531 22.0358 29.4832 25.6064 31.2486C26.1015 31.4934 26.7131 31.338 26.9931 30.8619L28.0072 29.1381C28.2872 28.662 28.1294 28.0465 27.6384 27.7937C23.0156 25.4139 17.4034 25.0789 12.4591 27.0129C7.37426 29.0018 3.09339 33.3505 1.2883 40.0887C1.14539 40.6222 1.48573 41.1592 2.02454 41.2805L3.97575 41.7195C4.51457 41.8408 5.04724 41.5004 5.19435 40.9681ZM44.7074 30.1212C45.0979 29.7307 45.0979 29.0975 44.7074 28.707L43.2932 27.2928C42.9026 26.9023 42.2695 26.9023 41.8789 27.2928L30.0003 39.1715L25.1216 34.2928C24.7311 33.9023 24.0979 33.9023 23.7074 34.2928L22.2932 35.707C21.9026 36.0975 21.9026 36.7307 22.2932 37.1212L28.586 43.4141C29.3671 44.1952 30.6334 44.1952 31.4145 43.4141L44.7074 30.1212Z"></path></svg>
                </button>
              </div>
              <div className="profile__btn-subscribed_list">
                <button className='profile__btn-change_profile'>Изменить профиль</button>
              </div>
            </div>
          </div>
          <div className="profile__descr-container">
            <div className="profile__stats">
              <div className="profile__following">
                <span>20</span>
                Подписки
              </div>
              <div className="profile__followers">
                <span>
                  13
                </span>
                Подписчики
              </div>
              <div className="profile__like-count">
                <span>
                  98
                </span>
                Лайки
              </div>
            </div>
            <div className="profile__descr">

            </div>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <input type="radio" name="profile-tab" id='profile_tab-videos' style={{ display: "none" }} defaultChecked />
        <input type="radio" name="profile-tab" id='profile_tab-likes' style={{ display: "none" }} />
        <div className="profile__tabs">
          <label htmlFor="profile_tab-videos" className='profile_tab-videos'>
            <p>
              Клипы
            </p>
            <div></div>
          </label>
          <label htmlFor="profile_tab-likes" className='profile_tab-likes'>
            <p>
              Лайкнул(а)
            </p>
          </label>
        </div>
        <div className="profile__own-videos">
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          {/* <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard />
          <ProfileVideoCard /> */}
        </div>
        <div className="profile__own-likes">
          User likes
        </div>
      </div>
    </main>
  </div>
};

export default UserProfilePage;
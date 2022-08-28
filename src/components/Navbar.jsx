import React from 'react';
// import { useState } from 'react';
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <a>
            <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" alt="" className='header-logo' />
          </a>
        </div>
        <div className="header__search">
          <input type="text" placeholder='Search accounts and videos' />
          <button>Search</button>
        </div>

        <div className="header__block-right">

          <div className="header__profile_section">
            <input type="file" id='upload-btn' accept='video/*' style={{ display: "none" }} />
            <label htmlFor="upload-btn">
              <a className="header__upload-btn">
                + Upload
              </a>
            </label>
            <div className="header__chat-icon">
              <img src="https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx" alt="" />
            </div>
            <div className="header__profile-avatar" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" />
            </div>
            <div
              className="modal-profile"
            >
              <ul>
                <li><a>View profile</a></li>
                <li><a>Settings</a></li>
                <li><a>English</a></li>
                <li><a>Log out</a></li>
              </ul>
            </div>
          </div>
          <div className="header__login">
            <a className="header__upload-btn">
              + Upload
            </a>
            <button className="header__btn-login">
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React from 'react';
import "../styles/HomePage.css";
import rena from '../assets/images/rena.jpg';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';

const SideBar = () => {

  const location = useLocation();

  const activeHeader = (path) => {
    if (location.pathname == path) {
      return 'active';
    }
  }

  const userProfileSideBar = () => {
    if (location.pathname == "/profile") {
      return { marginLeft: '15px'}
    }
  }

  return (

      <div className='sidebar'>
        <div className='head-links'>
          <Link to="/">
            <div className={activeHeader('/')}><HomeIcon /><span>Recommendations</span></div>
          </Link>
          <Link to="/upload">
            <div className={activeHeader('/upload')}><AddCircleIcon /><span>Add new post</span></div>
          </Link>
          <Link to="/favorites">
            <div className={activeHeader('/favorites')}><StarIcon /><span>Favorites</span></div>
          </Link>
          <Link to="/profile">
            <div className={activeHeader('/profile')}><PersonIcon /><span>Profile</span></div>
          </Link>
        </div>
        <div className='head-links rec-accounts'>
          <p>Recommended accounts</p>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
          <div className='rec-account'>
            <img src={rena} alt="" />
            <p className='user-name'>rena228</p>
          </div>
        </div>
        <div className='categories-block'>
          <p>Categories</p>
          <div className="categories">
            <div className="category">
              travel
            </div>
            <div className="category">
              nsfw
            </div>
            <div className="category">
              funny
            </div>
            <div className="category">
              dogs
            </div>
            <div className="category">
              some long ass category
            </div>
          </div>
        </div>
        <div className="footer">
          <div className='footer-section'>
            <p>Information</p>
            <p>News</p>
            <p>Contacts</p>
          </div>
          <div className='footer-section'>
            <p>For fun only</p>
            <p>Advertising</p>
            <p>Developers</p>
          </div>
          <div className='footer-section'>
            <p>Help</p>
            <p>Security</p>
            <p>Rules</p>
            <p>Something else</p>
          </div>
          <p>© 2022 viewo</p>
        </div>
      </div>
  );
};

export default SideBar;
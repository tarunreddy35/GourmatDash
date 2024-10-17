import React from 'react';
import './Navbar.css';
import { assets } from '../../../assets/assets'; 

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <img className="logo" src={assets.logo} alt="Logo" /> */}
      <span className='logo-name'>GourmetDash</span>
      <span className='admin'>Admin panel</span>
      <img className="profile" src={assets.profile1} alt="Profile" />
    </div>
  );
};

export default Navbar;

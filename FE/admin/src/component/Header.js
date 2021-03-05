import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import KitMascot from '../static/KitMascot.jpg';

const Header = () => {
  return (
    <div className="header">
      <img src={KitMascot} alt="KIT's mascot crow" />
      <span>ADMINISTRATOR</span>
      <Link to="/">
        <i className="fas fa-sign-out-alt" />
      </Link>
    </div>
  );
};

export default Header;

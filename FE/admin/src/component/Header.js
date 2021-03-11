import React from 'react';
import '../css/Header.css';
import KitMascot from '../static/KitMascot.jpg';

const Header = () => {
  return (
    <div className="header">
      <img src={KitMascot} alt="KIT's mascot crow" />
      <span>ADMINSTOR</span>
      <span>EXIT</span>
    </div>
  );
};

export default Header;

import React from 'react';
import MenuList from './MenuList';
import Profile from './Profile';
import '../../../css/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Profile />
      <MenuList />
    </div>
  );
}

export default Sidebar;

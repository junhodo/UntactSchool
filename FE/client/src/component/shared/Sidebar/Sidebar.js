import React from 'react';
import SidebarMenuList from './SidebarMenuList';
import Profile from './Profile';
import '../../../css/shared/Sidebar/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Profile />
      <SidebarMenuList />
    </div>
  );
}

export default Sidebar;

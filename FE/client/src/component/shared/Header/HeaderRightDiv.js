import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../static/image/search.png';
import userIcon from '../../../static/image/user.png';
import SearchBar from './SearchBar';
import SidebarIcon from '../Sidebar/SidebarIcon';
import '../../../css/shared/Header/HeaderRightDiv.css';
import '../../../css/shared/Sidebar/SidebarIcon.css';

const HeaderRightDiv = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [width, setWidth] = useState(0);
  const toggle = () => {
    const searchBarWidth = showSearchBar ? 0 : 100;
    setWidth(searchBarWidth);
    setShowSearchBar(!showSearchBar);
  };
  return (
    <div className="HeaderRightDiv">
      <SearchBar className="SearchBar" width={width} />
      <Link to="/search" className="search" onClick={toggle}>
        <div className="iconWraper">
          <img src={searchIcon} alt="search" />
        </div>
      </Link>
      <Link to="/user" className="user">
        <div className="iconWraper">
          <img src={userIcon} alt="user" />
        </div>
      </Link>
      <div className="iconWrapper sidebarIconWrapper">
        <SidebarIcon />
      </div>
    </div>
  );
};

export default HeaderRightDiv;

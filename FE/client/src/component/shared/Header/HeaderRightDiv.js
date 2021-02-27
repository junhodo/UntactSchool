import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../static/image/search.png';
import userIcon from '../../../static/image/user.png';
import SearchBar from './SearchBar';
import '../../../css/HeaderRightDiv.css';

const HeaderRightDiv = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const toggle = () => {
    setShowSearchBar(!showSearchBar);
  };
  let searchBar;
  if (showSearchBar) {
    searchBar = <SearchBar className="searchBar" />;
  } else {
    searchBar = '';
  }
  return (
    <div className="HeaderRightDiv">
      {searchBar}
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
    </div>
  );
};

export default HeaderRightDiv;

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import '../../../css/Header.css';
import searchIcon from '../../../static/image/search.png';
import userIcon from '../../../static/image/user.png';

function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" expand="lg" className="justify-content-between no-wrap">
        <Nav>
          <Nav.Link className="text-white">
            <Link to="/group">
              <p className="menuText">Group</p>
            </Link>
          </Nav.Link>
          <Nav.Link className="text-white">
            <Link to="/my">
              <p className="menuText">My</p>
            </Link>
          </Nav.Link>
        </Nav>
        <NavbarBrand className="text-white">
          <Link exact to="/">
            <h1>Clean Study</h1>
          </Link>
        </NavbarBrand>
        <div className="rightDiv">
          <Link to="/">
            <div className="iconWraper">
              <img src={searchIcon} alt="search" />
            </div>
          </Link>
          <Link to="/">
            <div className="iconWraper">
              <img src={userIcon} alt="user" />
            </div>
          </Link>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;

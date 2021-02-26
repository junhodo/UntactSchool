import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import '../../../css/Header.css';

import Vl from './Vl';
import HeaderRightDiv from './HeaderRightDiv';

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
          <Vl />
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
          <HeaderRightDiv />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, Col } from 'react-bootstrap';
import '../../../css/shared/Header/Header.css';

import Vl from './Vl';
import HeaderRightDiv from './HeaderRightDiv';

function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" expand="lg" className="justify-content-between no-wrap">
        <Col className="headerCol1">
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
        </Col>
        <Col className="headerCol2">
          <NavbarBrand className="text-white center-block">
            <Link exact to="/">
              <h1>Clean Study</h1>
            </Link>
          </NavbarBrand>
        </Col>
        <Col className="headerCol3">
          <HeaderRightDiv />
        </Col>
      </Navbar>
    </div>
  );
}

export default Header;

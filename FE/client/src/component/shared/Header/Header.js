import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" expand="lg" className="justify-content-between">
        <Nav>
          <Nav.Link className="text-white">
            <Link to="/group">Group</Link>
          </Nav.Link>
          <Nav.Link className="text-white">
            <Link to="/my">My</Link>
          </Nav.Link>
        </Nav>
        <NavbarBrand className="text-white">
          <Link exact to="/">
            Clean Study
          </Link>
        </NavbarBrand>
        <div>
          <p className="text-white">aaaaaa</p>
        </div>
      </Navbar>
      <p>this is Header</p>
    </div>
  );
}

export default Header;

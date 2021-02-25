import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" expand="lg" className="justify-content-between">
        <Nav>
          <Nav.Link className="text-white">Group</Nav.Link>
        </Nav>
        <NavbarBrand className="text-white">Clean Study</NavbarBrand>
        <Nav>
          <Nav.Link className="text-white">My</Nav.Link>
        </Nav>
      </Navbar>
      <p>this is Header</p>
    </div>
  );
}

export default Header;

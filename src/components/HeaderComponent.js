import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Navbar dark expand="md">
      <div className="container">
        <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
        <NavbarBrand href="/">dessertApp</NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                <span className="fa fa-info fa-lg"></span> About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg"></span> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg"></span> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Header;

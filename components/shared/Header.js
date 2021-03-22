import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Link from 'next/link'


const BsNavLink = props => {
  const {href, title} = props;
  return (
    <Link href={href}>
      <g className='nav-link port-navbar-link'>
        {title}
      </g>
    </Link>
  )
}

const BsNavBrand = () => 
  <Link href="/">
  <a className="port-navbar-brand">Alamgir</a>
  </Link>

const LoginLink = () => 
  <span className="nav-link port-navbar-link clickable">Login</span>

const LogoutLink = () => 
  <span className="nav-link port-navbar-link clickable">Logout</span>


const Header = () => {  
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
        <Navbar
          className="port-navbar port-default absolute"
          color="transparent"
          dark
          expand="md">
            <BsNavBrand />

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item clickable">
                <BsNavLink href="/" title="Home"/>
              </NavItem>
              <NavItem className="port-navbar-item clickable">
                <BsNavLink href="/about" title="About"/>
              </NavItem>
              <NavItem className="port-navbar-item clickable">
                <BsNavLink href="/portfolios" title="Portfolios"/>
              </NavItem>
              <NavItem className="port-navbar-item clickable">
                <BsNavLink href="/blogs" title="Blogs"/>
              </NavItem>
              <NavItem className="port-navbar-item clickable">
                <BsNavLink href="/cv" title="Cv"/>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem className="port-navbar-item">
                  <LoginLink />
              </NavItem>
              <NavItem className="port-navbar-item">
                  <LogoutLink />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default Header;

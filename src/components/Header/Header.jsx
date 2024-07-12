import React from 'react'
import {Container,  Nav, NavDropdown, Navbar, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">QUIZ ONLINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/users'  className='nav-link'>Users</NavLink>
            <NavLink to='/admins'  className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
            <Button variant='outline-secondary' className='btn-login'>Log in</Button>
            <Button variant='outline-dark' className='btn-signup'>Sign up</Button>
            {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
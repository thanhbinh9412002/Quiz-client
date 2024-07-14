import React from 'react'
import {Container,  Nav, NavDropdown, Navbar, Button} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate('/login');
  }

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const account = useSelector(state => state.user.account);

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
            {isAuthenticated === false ?
              <>
                <Button variant='outline-secondary' className='btn-login' onClick={() => handleLogin()}>Log in</Button>
                <Button variant='outline-dark' className='btn-signup' onClick={() => navigate('/register')}>Sign up</Button>
              </>
              :
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
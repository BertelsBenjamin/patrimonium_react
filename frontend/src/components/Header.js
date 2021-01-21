import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Figure, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className='mb-3'>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Navbar.Brand href='/'>
          <Figure.Image
            width={30}
            height={30}
            alt='logo'
            src='/assets/logos/logo_orange.png'
          />
          Patrimonium&reg;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link className='mr-3' href='/'>
              <i className='mi-home px-3'></i>Home
            </Nav.Link>
            <Nav.Link className='mr-3' href='/features'>
              <i className='mi-filter px-3'></i>Features
            </Nav.Link>
            <Nav.Link className='mr-3' href='/pricing'>
              <i className='mi-tag px-3'></i>Pricing
            </Nav.Link>
            {userInfo ? (
              <NavDropdown
                className='mr-3'
                title={userInfo.email}
                id='username'
              >
                <LinkContainer to='/dashboard'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link className='mr-3'>
                  <i className='mi-sunrise px-3'></i>Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

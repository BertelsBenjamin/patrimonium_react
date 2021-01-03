import React from 'react';
import { Navbar, Nav, Container, Figure } from 'react-bootstrap';

const Header = () => {
  return (
    <header className='mb-3'>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
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
              <Nav.Link href='/'>
                <i className='mi-home px-3'></i>Home
              </Nav.Link>
              <Nav.Link href='/features'>
                <i className='mi-filter px-3'></i>Features
              </Nav.Link>
              <Nav.Link href='/pricing'>
                <i className='mi-tag px-3'></i>Pricing
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='mi-lock px-3'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

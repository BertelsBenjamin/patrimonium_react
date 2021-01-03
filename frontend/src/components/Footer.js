import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='mt-3'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright&copy; Patrimonium&reg; 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

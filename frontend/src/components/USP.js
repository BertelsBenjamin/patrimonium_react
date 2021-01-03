import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const USP = ({ img, title, text, cta }) => {
  return (
    <>
      <Card style={{ width: '18rem', padding: '20px' }}>
        <Card.Img variant='top' src={img.toString()} alt='usp_logo' />
        <Card.Body>
          <Card.Title>{title.toString()}</Card.Title>
          <Card.Text>{text.toString()}</Card.Text>
          <LinkContainer to={cta.toString()}>
            <Button>Read More</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
};

export default USP;

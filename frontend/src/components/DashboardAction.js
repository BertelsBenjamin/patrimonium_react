import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardAction = ({ icon, title, text, link, item }) => {
  return (
    <Card className='text-center'>
      <Card.Header>
        <i className={icon}></i>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={link.toString()}>
          <Button variant='primary'>Go to {item}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DashboardAction;

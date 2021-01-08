import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAcademyDetails } from '../actions/academyActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const AcademyScreen = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAcademyDetails(id));
  }, [dispatch, id]);

  const academyDetails = useSelector((state) => state.academyDetails);
  const { loading, error, academy } = academyDetails;

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Card style={{ width: '100%' }}>
          <Card.Img variant='top' src='' />
          <Card.Body>
            <Card.Title>{academy.name}</Card.Title>
            <Card.Text>
              <a href={`https://${academy.url}`} target='blank'>
                {academy.url}
                <i className='mi-external-link ml-3'></i>
              </a>
            </Card.Text>
          </Card.Body>
          <Row>
            <Col>
              <Card.Header>Adress</Card.Header>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  <i className='mi-home mr-3'></i>
                  {`${academy.street} ${academy.house_number} ${academy.bus_number}`}
                </ListGroupItem>
                <ListGroupItem>
                  <i className='mi-send mr-3'></i>
                  {`${academy.postal_code}, ${academy.place}`}
                </ListGroupItem>
                <ListGroupItem>
                  <i className='mi-map mr-3'></i>
                  {`${academy.province}`}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col>
              <Card.Header>Contact</Card.Header>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  <i className='mi-user mr-3'></i>
                  {`${academy.director_last_name} ${academy.director_first_name}`}
                </ListGroupItem>
                <ListGroupItem>
                  <i className='mi-call mr-3'></i>
                  {academy.phone ? academy.phone : '/'}
                </ListGroupItem>
                <ListGroupItem>
                  <i className='mi-email mr-3'></i>
                  <a href={`mailto:${academy.email}`}>{`${academy.email}`}</a>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default AcademyScreen;

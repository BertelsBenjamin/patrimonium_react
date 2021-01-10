import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPianoDetails } from '../actions/pianoActions';
import { getAcademyDetailsByPianoId } from '../actions/academyActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PianoDetailsScreen = ({ match }) => {
  const id = match.params.id;
  console.log(id);
  const dispatch = useDispatch();

  const academyDetails = useSelector((state) => state.academyDetails);
  const { academy } = academyDetails;
  console.log(academy);

  useEffect(() => {
    dispatch(getPianoDetails(id));
    dispatch(getAcademyDetailsByPianoId(academy._id));
  }, [dispatch, id, academy]);

  const pianoDetails = useSelector((state) => state.pianoDetails);
  const { loading, error, piano } = pianoDetails;

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
            <Row>
              <Col>
                <Card.Title>
                  {piano.brand} {piano.model} ({piano.serial_number})
                </Card.Title>
                <Card.Text>
                  <Link to={`/academies/${academy._id}`}>
                    {academy.name} {academy.place}
                    <i className='mi-'></i>
                  </Link>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Row>
            <Col>
              <Card.Header>Details</Card.Header>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  Year of construction: {piano.year_of_construction}
                </ListGroupItem>
                <ListGroupItem>
                  Type:{' '}
                  {piano.type === 'V'
                    ? 'Grand Piano'
                    : piano.type === 'P'
                    ? 'Upright Piano'
                    : 'Other'}
                </ListGroupItem>
                <ListGroupItem>Room: {piano.room}</ListGroupItem>
                <ListGroupItem>
                  Small revision needed:{' '}
                  {new Date(piano.small_revision_needed).toLocaleDateString(
                    'en-GB'
                  )}
                </ListGroupItem>
                <ListGroupItem>
                  Large revision needed:{' '}
                  {new Date(piano.large_revision_needed).toLocaleDateString(
                    'en-GB'
                  )}
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

export default PianoDetailsScreen;

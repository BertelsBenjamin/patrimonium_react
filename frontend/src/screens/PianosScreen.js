import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Table from '../components/Table';
import { getPianosByAcademyId } from '../actions/pianoActions';
import { Container } from 'react-bootstrap';

const PianosScreen = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

  const AcademyDetails = useSelector((state) => state.academyDetails);
  const { academy } = AcademyDetails;

  useEffect(() => {
    dispatch(getPianosByAcademyId(id));
  }, [dispatch, id]);

  const pianosByAcademyId = useSelector((state) => state.pianoListByAcademyId);
  const { loading, error, pianos } = pianosByAcademyId;

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <h3>
            {academy.name} {academy.place}
          </h3>
          <h4>
            {academy.street} {academy.house_number}, {academy.postal_code}{' '}
            {academy.place}
          </h4>
          <Table data={pianos} details='pianos' />
        </Container>
      )}
    </>
  );
};

export default PianosScreen;

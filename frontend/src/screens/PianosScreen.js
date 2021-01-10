import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Table from '../components/Table';
import { getPianosByAcademyId } from '../actions/pianoActions';

const PianosScreen = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();

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
        <Table data={pianos} details='pianos' />
      )}
    </>
  );
};

export default PianosScreen;

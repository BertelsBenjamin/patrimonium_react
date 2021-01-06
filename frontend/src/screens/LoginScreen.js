import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAcademies } from '../actions/academyActions';
import Table from '../components/Table';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LoginScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAcademies());
  }, [dispatch]);

  const academyList = useSelector((state) => state.academyList);
  const { loading, error, academies } = academyList;
  const filteredAcademies = [];
  academies.map((academy) =>
    filteredAcademies.push({
      _id: academy._id,
      name: academy.name,
      hq: academy.hq,
      street: academy.street,
      house_number: academy.house_number,
      bus_number: academy.bus_number,
    })
  );
  return (
    <>
      <h1>Academies</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table data={filteredAcademies} details='academies' />
      )}
    </>
  );
};

export default LoginScreen;

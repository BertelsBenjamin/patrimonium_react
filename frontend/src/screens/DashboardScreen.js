import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashboardAction from '../components/DashboardAction';

const DashboardScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Container fluid>
      <Row className='text-center'>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <DashboardAction
            icon='mi-settings'
            title='Update Profile'
            text='Change your profile settings and manage your personal data.'
            link='/profile'
            item='Profile'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <DashboardAction
            icon='mi-home'
            title='Find an academy'
            text='Browse through a list of academies and find the one you need.'
            link='/academies'
            item='Academies'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <DashboardAction
            icon='mi-grid'
            title='Find an instrument'
            text='Browse through a list of instruments and find the one you need.'
            link='/pianos'
            item='Pianos'
          />
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <DashboardAction
            icon='mi-user'
            title='Manage Technicians'
            text='Create, find, update and delete technicians.'
            link='/technicians'
            item='Technicians'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <DashboardAction
            icon='mi-bar-chart-alt'
            title='View Stats'
            text='Explore charts and get insight into your data.'
            link='/stats'
            item='Stats'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <DashboardAction
            icon='mi-users'
            title='Manage Users'
            text='Create, find, update and delete users.'
            link='/users'
            item='Users'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardScreen;

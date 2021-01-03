import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import USP from '../components/USP';

const HomeScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center'>Finally, it's here.</h1>
          <p className='text-center'>
            We from Patrimonium&reg; are truly excited to announce the solution
            for maintaining the entire fleet of instruments in music schools.
          </p>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <USP
            img='/assets/svg/SaaS.svg'
            title='B2B reporting suite'
            text='Ad est tempor enim nulla. Magna cillum non sit enim sunt duis sunt nulla tempor sunt. Fugiat laboris excepteur reprehenderit do id ex ipsum.'
            cta='/b2b-reporting-suite'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <USP
            img='/assets/svg/Sync Data.svg'
            title='Real time database sync'
            text='Ad est tempor enim nulla. Magna cillum non sit enim sunt duis sunt nulla tempor sunt. Fugiat laboris excepteur reprehenderit do id ex ipsum.'
            cta='/real-time-database-sync'
          />
        </Col>
        <Col sm={12} md={6} lg={4} className='py-3'>
          <USP
            img='/assets/svg/Feedback Audience.svg'
            title='Instant feedback'
            text='Ad est tempor enim nulla. Magna cillum non sit enim sunt duis sunt nulla tempor sunt. Fugiat laboris excepteur reprehenderit do id ex ipsum.'
            cta='/instant-customer-feedback'
          />
        </Col>
        {/* <Col sm={12} md={6} lg={4} className='py-3'>
          <USP
            img='/assets/svg/Valuations.svg'
            title='Valuate'
            text='Ad est tempor enim nulla. Magna cillum non sit enim sunt duis sunt nulla tempor sunt. Fugiat laboris excepteur reprehenderit do id ex ipsum.'
            cta='/valuate'
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default HomeScreen;

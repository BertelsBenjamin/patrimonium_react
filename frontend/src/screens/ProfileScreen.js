import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from '../actions/userActions';

const ProfileScreen = ({ location, history }) => {
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [street, setStreet] = useState('');
  const [place, setPlace] = useState('');
  const [house_number, setHouseNumber] = useState('');
  const [phone_int, setPhoneInt] = useState('');
  const [phone_mobile, setPhoneMobile] = useState('');
  const [phone_private, setPhonePrivate] = useState('');
  const [mobile_private, setMobilePrivate] = useState('');
  const [born_at, setBornAt] = useState('');
  const [pc, setPc] = useState('');
  const [private_email, setPrivateEmail] = useState('');

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
      }
    }
  }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      //DISPATCH UPDATE PROFILE
    }
  };

  return (
    <Container fluid>
      <Row>
        <h2>User Profile</h2>
      </Row>
      <Row>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Col>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='first_name'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='first_name'
                  placeholder='Enter first name'
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='first_name'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='first_name'
                  placeholder='Enter first name'
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </Row>
    </Container>
  );
};

export default ProfileScreen;

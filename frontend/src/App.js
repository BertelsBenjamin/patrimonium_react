import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import FeaturesScreen from './screens/FeaturesScreen';
import PricingScreen from './screens/PricingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AcademiesScreen from './screens/AcademiesScreen';
import AcademyDetailsScreen from './screens/AcademyDetailsScreen';
import PianosScreen from './screens/PianosScreen';
import PianoDetailsScreen from './screens/PianoDetailsScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid>
          <Route path='/dashboard' component={DashboardScreen} exact />
          <Route path='/academies' component={AcademiesScreen} exact />
          <Route path='/academies/:id' component={AcademyDetailsScreen} exact />
          <Route path='/pianos/academy/:id' component={PianosScreen} exact />
          <Route path='/pianos/:id' component={PianoDetailsScreen} exact />
          <Route path='/features' component={FeaturesScreen} />
          <Route path='/pricing' component={PricingScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

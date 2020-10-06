import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutme from './components/pages/Aboutme';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
// import Email from './components/pages/Email';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutme' component={Aboutme} />
          <Route path='/resume' component={Resume} />
          {/* <Route path='/email' component={Email} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
    
  );
}

export default App;

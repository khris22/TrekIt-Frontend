import React, { Component } from 'react';
import Location from '../src/containers/Location';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavbarComponents/Navbar';
import About from './components/NavbarComponents/About';
import Home from './components/NavbarComponents/Home';
import Footer from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <div className='ui container App '>
        <br />
        <h1>trekIt</h1>
        <Navbar />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
          <Route path='/locations' component={Location} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

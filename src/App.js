import React, { Component } from 'react';
// import logo from './logo.svg';
import Location from '../src/containers/Location';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar_components/Navbar';
// import Home from './Home';
import About from './components/navbar_components/About';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>trekIt</h1>
        <Navbar />
        <Route exact path='/about' component={About} />
        <Route path='/locations' component={Location} />
      </div>
    );
  }
}

export default App;

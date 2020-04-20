import React, { Component } from 'react';
import Location from '../src/containers/Location';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar_components/Navbar';
import About from './components/navbar_components/About';
import Home from './components/navbar_components/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>trekIt</h1>
        <Navbar />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
          <Route path='/locations' component={Location} />
        </Switch>
      </div>
    );
  }
}

export default App;

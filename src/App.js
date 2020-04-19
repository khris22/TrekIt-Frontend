import React, { Component } from 'react';
// import logo from './logo.svg';
import Location from '../src/containers/Location';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar_components/Navbar';
// import Home from './Home';
import About from './components/navbar_components/About';
import Home from './components/navbar_components/Home';
// import MapBox from './mapboxAndReact/MapBox';

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
          {/* <MapBox /> */}
        </Switch>
      </div>
    );
  }
}

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken =
//   'pk.eyJ1Ijoia2hyaXNwdW56YWxhbiIsImEiOiJjazk0azNzejUwZHd6M2pteXZvb2NudGNpIn0.KteCQcVfIG2hCmu7O2L-8A';
// var map = new mapboxgl.Map({
//   container: Location,
//   style: 'mapbox://styles/mapbox/streets-v11',
// });

export default App;

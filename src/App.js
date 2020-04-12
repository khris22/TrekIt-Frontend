import React, { Component } from 'react';
// import logo from './logo.svg';
import Location from '../src/containers/Location';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>trekIt</h1>
        <Location />
      </div>
    );
  }

  componentDidMount() {}
}

export default App;

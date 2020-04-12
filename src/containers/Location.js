import React, { Component } from 'react';
import LocationInput from '../components/LocationInput';

export class Location extends Component {
  render() {
    return (
      <div>
        <h1>In Location Container</h1>
        <LocationInput />
      </div>
    );
  }
}

export default Location;

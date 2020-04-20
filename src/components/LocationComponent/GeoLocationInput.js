import React, { Component } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
// import Geocoder from 'react-map-gl-geocoder';
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { connect } from 'react-redux';
import { addLocation } from '../../actions/locationActions';

// const queryParams = {
//   country: 'us',
// };

class GeoLocationInput extends Component {
  //   state = {
  //     viewport: {},
  //   };
  state = {
    park: '',
    lat: '',
    long: '',
  };

  onSelected = (viewport, location) => {
    console.log('Selected: ', location);
    console.log('Name of park: ', location.text);
    console.log('Latitude: ', location.geometry.coordinates[1]);
    console.log('Longitude: ', location.geometry.coordinates[0]);

    // this.setState({
    //   viewport,
    // });
    this.setState({
      park: location.text,
      lat: location.geometry.coordinates[1],
      long: location.geometry.coordinates[0],
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLocation(this.state);
    this.setState({
      park: '',
      lat: '',
      long: '',
    });
  };

  myInput = (props) => (
    <input {...props} placeholder='Search here...' value={undefined} />
  );

  render() {
    // const { viewport } = this.state;
    return (
      <div>
        <h5> --- Search the park here: -- </h5>
        <Geocoder
          mapboxApiAccessToken={
            'pk.eyJ1Ijoia2hyaXNwdW56YWxhbiIsImEiOiJjazk0azhuNXowZHZyM2hvbThiZThnMTg4In0.WqfOYiH8M18koMjFjwZTEg'
          }
          onSelected={this.onSelected}
          viewport={this.state}
          value={this.state || ''}
          hideOnSelect={true}
          // updateInputOnSelect={true}
          // initialInputValue=''
          inputComponent={this.myInput}
          // queryParams={queryParams}
        ></Geocoder>

        <>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='Name of Park'
              name='park'
              value={this.state.park}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Latitude'
              name='lat'
              value={this.state.lat}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Longitude'
              name='long'
              value={this.state.long}
              onChange={this.handleChange}
            />
            <input type='submit' />
          </form>
        </>
      </div>
    );
  }
}

export default connect(null, { addLocation })(GeoLocationInput);

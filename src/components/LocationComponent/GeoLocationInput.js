import React, { Component } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
// import Geocoder from 'react-map-gl-geocoder';
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { connect } from 'react-redux';
import { addLocation } from '../../actions/locationActions';
import { Form, Segment } from 'semantic-ui-react';

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
    input: '',
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
      input: '',
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
      input: '',
    });
  };

  myInput = (props) => (
    <Form.Field>
      <label>
        <strong>--- Search for a park here: ---</strong>
      </label>
      <Form.Input {...props} placeholder='Search here...' value={undefined} />
    </Form.Field>
  );

  render() {
    // const { viewport } = this.state;
    return (
      <div>
        <Segment color='blue' tertiary textAlign='center'>
          <Geocoder
            mapboxApiAccessToken={
              'pk.eyJ1Ijoia2hyaXNwdW56YWxhbiIsImEiOiJjazk0azhuNXowZHZyM2hvbThiZThnMTg4In0.WqfOYiH8M18koMjFjwZTEg'
            }
            onSelected={this.onSelected}
            viewport={this.state}
            // value={this.state || ''}
            hideOnSelect={true}
            // updateInputOnSelect={true}
            initialInputValue={this.state.input}
            inputComponent={this.myInput}
            clearOnBlur={true}
            // className='react-geocoder'
            // itemComponent={this.itemsShow}
            // queryParams={queryParams}
          ></Geocoder>
        </Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              type='text'
              label='Park:'
              placeholder='Name of Park'
              name='park'
              value={this.state.park}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              fluid
              type='number'
              label='Latitude:'
              placeholder='Latitude'
              name='lat'
              value={this.state.lat}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              fluid
              type='number'
              label='Longitude:'
              placeholder='Longitude'
              name='long'
              value={this.state.long}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <center>
            <Form.Button color='green' type='submit'>
              Add this park to your List
            </Form.Button>
          </center>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addLocation })(GeoLocationInput);

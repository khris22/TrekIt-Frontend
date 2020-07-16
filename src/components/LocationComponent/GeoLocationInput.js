import React, { Component } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import { connect } from 'react-redux';
import { addLocation } from '../../actions/locationActions';
import { Form, Segment } from 'semantic-ui-react';

class GeoLocationInput extends Component {
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
    return (
      <div>
        <Segment color='blue' tertiary textAlign='center'>
          <Geocoder
            mapboxApiAccessToken={
              'pk.eyJ1Ijoia2hyaXNwdW56YWxhbiIsImEiOiJjazk0azhuNXowZHZyM2hvbThiZThnMTg4In0.WqfOYiH8M18koMjFjwZTEg'
            }
            onSelected={this.onSelected}
            viewport={this.state}
            hideOnSelect={true}
            initialInputValue={this.state.input}
            inputComponent={this.myInput}
            clearOnBlur={true}></Geocoder>
        </Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            {/* added readOnly={true} on form input to avoid invalid data */}
            <Form.Input
              fluid
              type='text'
              // label='Park:'
              placeholder='Name of Park'
              readOnly={true}
              name='park'
              value={this.state.park}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              fluid
              type='number'
              // label='Latitude:'
              placeholder='Latitude'
              readOnly={true}
              name='lat'
              value={this.state.lat}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              fluid
              type='number'
              // label='Longitude:'
              placeholder='Longitude'
              readOnly={true}
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

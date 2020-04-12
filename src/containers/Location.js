import React, { Component } from 'react';
import LocationInput from '../components/LocationInput';
import Locations from '../components/Locations';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locationActions';

export class Location extends Component {
  componentDidMount() {
    this.props.fetchLocations();
    console.log('Inside ComponenDidMount');
  }

  render() {
    return (
      <div>
        <h1>In Location Container</h1>
        <LocationInput />
        <Locations locations={this.props.locations} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations()),
  // addLocation: (formData) => dispatch({ type: 'ADD_RESTAURANT'}, formData)
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);

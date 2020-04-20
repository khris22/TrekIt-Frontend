import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLocation } from '../../actions/locationActions';

export class LocationInput extends Component {
  state = {
    park: '',
    lat: '',
    long: '',
  };

  handleChange = (e) => {
    this.setState({
      park: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addLocation(this.state);
    this.setState({
      park: '',
    });
  };

  render() {
    return (
      <div>
        <h2>In LocationInput</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name of the Park: </label>
          <input
            type='text'
            placeholder='Park'
            value={this.state.park}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default connect(null, { addLocation })(LocationInput);

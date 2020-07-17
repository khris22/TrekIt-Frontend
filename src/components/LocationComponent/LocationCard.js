import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLocation } from '../../actions/locationActions';
import { Card, Divider, Button, Popup } from 'semantic-ui-react';

export class LocationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
    };
  }

  handleDelete = (location) => {
    console.log('DELETE LOCATION', location);
    this.props.deleteLocation(location.id);
  };

  handleLike = (e) => {
    this.setState((state) => {
      return { like: state.like + 1 };
    });
  };

  render() {
    return (
      <div>
        <Card key={this.props.location.id} color='olive'>
          <Link
            key={this.props.location.id}
            to={`/locations/${this.props.location.id}`}
            className='content'>
            <center>
              <h4>{this.props.location.park}</h4>
            </center>
          </Link>
          <Popup
            content={`Delete "${this.props.location.park}"`}
            size='tiny'
            inverted
            trigger={
              <Button
                icon='delete'
                size='mini'
                attached='bottom'
                onClick={() => {
                  window.confirm(
                    'WARNING! Deleting this LOCATION will delete all your saved Adventures for this location. Click "OK" to proceed.',
                  ) && this.handleDelete(this.props.location);
                }}
              />
            }
          />
          {/* <Button onClick={this.handleLike}>Likes:{this.state.like}</Button> */}
        </Card>
        <Divider />
      </div>
    );
  }
}

export default connect(null, { deleteLocation })(LocationCard);

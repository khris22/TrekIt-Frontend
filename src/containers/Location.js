import React, { Component, Fragment } from 'react';
import Locations from '../components/LocationComponent/Locations';
import LocationShow from '../components/LocationComponent/LocationShow';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locationActions';
import { Route, Switch } from 'react-router-dom';
import Mapbox from '../components/ReactMapGL/Mapbox';
import GeoLocationInput from '../components/LocationComponent/GeoLocationInput';

class Location extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  render() {
    // debugger;
    return (
      <div>
        <Switch>
          <Route
            path='/locations/:id'
            render={(routerProps) => {
              return (
                <LocationShow
                  {...routerProps}
                  locations={this.props.locations}
                />
              );
            }}
          />
          <Route
            path='/locations'
            render={(routerProps) => {
              return (
                <Fragment>
                  <GeoLocationInput />
                  <Mapbox {...routerProps} locations={this.props.locations} />
                  <Locations
                    {...routerProps}
                    locations={this.props.locations}
                  />
                </Fragment>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations.sort((a, b) => (a.park > b.park ? 1 : -1)),
});

export default connect(mapStateToProps, { fetchLocations })(Location);

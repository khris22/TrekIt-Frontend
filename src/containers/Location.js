import React, { Component } from 'react';
import LocationInput from '../components/LocationComponent/LocationInput';
import Locations from '../components/LocationComponent/Locations';
import LocationShow from '../components/LocationComponent/LocationShow';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locationActions';
import { Route, Switch } from 'react-router-dom';

class Location extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  // CAUSING ERROR:
  // handleLoading = () => {
  //   if (this.props.loading) {
  //     return <h2>LOADING......</h2>;
  //   } else {
  //     return <Locations locations={this.props.locations} />;
  //   }
  // };

  render() {
    // debugger;
    return (
      <div>
        {/* <LocationInput /> */}
        <Switch>
          <Route path='/locations/new' component={LocationInput} />
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
                <Locations {...routerProps} locations={this.props.locations} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations,
  // loading: state.loading,
});

export default connect(mapStateToProps, { fetchLocations })(Location);

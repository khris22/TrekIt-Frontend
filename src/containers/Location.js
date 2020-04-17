import React, { Component } from 'react';
import LocationInput from '../components/LocationInput';
import Locations from '../components/Locations';
import LocationShow from '../components/LocationShow';
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
        <h1>In Location Container</h1>
        {/* <LocationInput /> */}
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/new' component={LocationInput} />
          <Route
            path='/locations/:id'
            render={(routerProps) => {
              // <Locations {...routerProps} locations={this.props.locations} />

              // console.log(routerProps.match);
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
              // console.log(routerProps.match);
              return (
                <Locations {...routerProps} locations={this.props.locations} />
              );
            }}
          />
        </Switch>

        {/* <Locations locations={this.props.locations} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations,
  // loading: state.loading,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchLocations: () => dispatch(fetchLocations()),
//   // addLocation: (formData) => dispatch({ type: 'ADD_RESTAURANT'}, formData)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Location);
export default connect(mapStateToProps, { fetchLocations })(Location);

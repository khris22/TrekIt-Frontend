import React from 'react';
// import Location from './Location';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import LocationShow from '../components/LocationShow';

const Locations = (props) => {
  console.log('In components Locations');
  console.log(props);

  // const locationData = locations.map((loc) => (
  //   <LocationList key={loc.id} location={loc} />
  // ));
  // debugger;
  return (
    <div>
      <h3>Inside Locations (Index)</h3>
      {/* <ul>{locationData}</ul> */}
      {/* 
      <Route path='/:id' render={() => <Location />}></Route> */}

      {props.locations.map((loc) => (
        <Link key={loc.id} to={`/locations/${loc.id}`}>
          {' '}
          {loc.park}
        </Link>
      ))}
      {/* <Location key={loc.id} location={loc} /> */}
      {/* <Route path={`/locations/:id`} component={LocationShow} /> */}
    </div>
  );
};

export default Locations;

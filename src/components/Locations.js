import React from 'react';
import Location from './Location';
import { Route } from 'react-router-dom';

const Locations = (props) => {
  console.log('In components Locations');
  console.log(props.locations);

  // const locationData = locations.map((loc) => (
  //   <LocationList key={loc.id} location={loc} />
  // ));
  return (
    <div>
      <h3>Inside Locations (Index)</h3>
      {/* <ul>{locationData}</ul> */}
      {props.locations.map((loc) => (
        <Location key={loc.id} location={loc} />
      ))}
      {/* <Route path='/locations/:id' render={() => <Location location={loc}/> }></Route> */}
    </div>
  );
};

export default Locations;

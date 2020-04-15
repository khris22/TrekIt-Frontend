import React from 'react';
// import Location from './Location';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';

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
        <Link key={loc.id} to={`/${loc.id}`}>
          {/* <Location key={loc.id} location={loc} /> */}
          <li>{loc.park}</li>
        </Link>
      ))}
    </div>
  );
};

export default Locations;

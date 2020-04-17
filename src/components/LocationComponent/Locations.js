import React from 'react';
import { Link } from 'react-router-dom';

const Locations = (props) => {
  console.log('In components Locations');
  console.log(props);

  // const locationData = locations.map((loc) => (
  //   <LocationList key={loc.id} location={loc} />
  // ));
  // debugger;
  return (
    <div>
      <h4>Inside Locations (Index)</h4>
      {props.locations.map((loc) => (
        <Link key={loc.id} to={`/locations/${loc.id}`}>
          {' '}
          {loc.park}
        </Link>
      ))}
    </div>
  );
};

export default Locations;

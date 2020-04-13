import React from 'react';
import LocationList from './LocationList';

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
        <LocationList key={loc.id} location={loc} />
      ))}
    </div>
  );
};

export default Locations;

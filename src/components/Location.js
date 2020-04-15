import React from 'react';

const LocationList = ({ location }) => {
  console.log('INside LIST');
  console.log(location);
  return (
    <div>
      {/* <h1>IN LOCATION.JS</h1> */}
      <li>{location.park}</li>
    </div>
  );
};

export default LocationList;

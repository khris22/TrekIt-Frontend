import React from 'react';

const LocationList = ({ location }) => {
  console.log('INside LIST');
  console.log(location);
  return (
    <div>
      <li>{location.park}</li>
    </div>
  );
};

export default LocationList;

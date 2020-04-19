import React from 'react';
import Adventure from '../../containers/Adventure';

const LocationShow = (props) => {
  const location = props.locations.find(
    ({ id }) => id === parseInt(props.match.params.id),
  );

  // console.log('INSIDE SHOW PAGE', location);
  return (
    <div>
      <h2>{location ? location.park : <p>LOADING</p>}</h2>
      <Adventure location={location} />
    </div>
  );
};

export default LocationShow;

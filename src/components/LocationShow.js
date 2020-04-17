import React from 'react';
import Adventure from '../containers/Adventure';

const LocationShow = (props) => {
  // debugger;
  console.log('INSIDE SHOW PAGE');
  console.log(props);

  // let location = props.locations.filter(
  //   (loc) => loc.id === parseInt(props.match.params.id),
  // )[0];
  const location = props.locations.find(
    ({ id }) => id === parseInt(props.match.params.id),
  );

  console.log(location);

  // showPage = () => {};

  return (
    <div>
      <h1>LOCATION SHOW PAGE</h1>
      <h5>{location ? location.park : <p>LOADING</p>}</h5>
      <Adventure location={location} />
    </div>
  );
};

export default LocationShow;

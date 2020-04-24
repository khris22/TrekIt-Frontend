import React from 'react';
import Adventure from '../../containers/Adventure';
import { Header } from 'semantic-ui-react';

const LocationShow = (props) => {
  const location = props.locations.find(
    ({ id }) => id === parseInt(props.match.params.id),
  );

  return (
    <div>
      <Header as='h1' block textAlign='center'>
        {location ? location.park : <p>LOADING</p>}
      </Header>
      <Adventure location={location} />
    </div>
  );
};

export default LocationShow;

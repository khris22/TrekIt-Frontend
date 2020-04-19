import React from 'react';
import { Link } from 'react-router-dom';

const Locations = (props) => {
  return (
    <div>
      <h4>Inside Locations (Index)</h4>
      {props.locations.map((loc) => (
        <Link key={loc.id} to={`/locations/${loc.id}`}>
          {' '}
          <li>{loc.park}</li>
        </Link>
      ))}
    </div>
  );
};

export default Locations;

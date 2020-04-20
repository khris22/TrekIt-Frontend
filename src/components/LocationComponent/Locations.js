import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLocation } from '../../actions/locationActions';

const Locations = (props) => {
  const handleDelete = (location) => {
    console.log('DELETE LOCATION', location);
    props.deleteLocation(location.id);
  };

  return (
    <div>
      <h4>Inside Locations (Index)</h4>
      {props.locations.map((loc) => (
        <li key={loc.id}>
          <Link key={loc.id} to={`/locations/${loc.id}`}>
            {loc.park}{' '}
          </Link>
          <button
            onClick={() => {
              window.confirm(
                'WARNING! Deleting this LOCATION will delete all your saved Adventures for this location. Click "OK" to proceed.',
              ) && handleDelete(loc);
            }}>
            Delete this Location
          </button>
        </li>
      ))}
    </div>
  );
};

// export default Locations;
export default connect(null, { deleteLocation })(Locations);

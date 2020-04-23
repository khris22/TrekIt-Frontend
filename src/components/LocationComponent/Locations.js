import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLocation } from '../../actions/locationActions';
import { Card, Divider, Button, Popup } from 'semantic-ui-react';

const Locations = (props) => {
  const handleDelete = (location) => {
    console.log('DELETE LOCATION', location);
    props.deleteLocation(location.id);
  };

  return (
    <div>
      <Divider />
      <h4>Your Park List:</h4>
      <Card.Group itemsPerRow={4}>
        {props.locations.map((loc) => (
          <Card key={loc.id} color='olive'>
            <Link key={loc.id} to={`/locations/${loc.id}`} className='content'>
              <center>
                <h4>{loc.park}</h4>
              </center>
            </Link>
            <Popup
              content={`Delete "${loc.park}"`}
              size='tiny'
              inverted
              trigger={
                <Button
                  icon='delete'
                  size='mini'
                  attached='bottom'
                  onClick={() => {
                    window.confirm(
                      'WARNING! Deleting this LOCATION will delete all your saved Adventures for this location. Click "OK" to proceed.',
                    ) && handleDelete(loc);
                  }}
                />
              }
            />
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

// export default Locations;
export default connect(null, { deleteLocation })(Locations);

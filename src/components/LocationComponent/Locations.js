import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteLocation } from '../../actions/locationActions';
import { Card, Divider } from 'semantic-ui-react';
import LocationCard from './LocationCard';

const Locations = (props) => {
  // const [likeCount, setLikeCount] = useState(0);

  return (
    <div>
      <Divider />
      <h4>Your Park List:</h4>
      <Card.Group itemsPerRow={4}>
        {props.locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </Card.Group>
    </div>
  );
};

// export default Locations;
export default connect(null, { deleteLocation })(Locations);

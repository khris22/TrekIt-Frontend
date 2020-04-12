import React from 'react';

const Locations = (props) => {
  console.log('In components Locations');
  console.log(props.locations);
  // const { locations} = this.props;
  // locations.map( loc => )
  return (
    <div>
      <h3>Inside Locations (Index)</h3>
    </div>
  );
};

export default Locations;

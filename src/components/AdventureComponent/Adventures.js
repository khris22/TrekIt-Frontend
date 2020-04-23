import React from 'react';

import { Divider } from 'semantic-ui-react';
// import Moment from 'react-moment';
import AdventureCard from './AdventureCard';

const Adventures = (props) => {
  // console.log(props);

  // const handleEdit = (adv) => {
  //   console.log('EDIT ADVENTURE', adv);
  // };

  return (
    <div>
      <Divider />
      <h4>Here are your adventures for this location:</h4>
      {props.adventures &&
        props.adventures.map((adv) => (
          <AdventureCard key={adv.id} adventure={adv} />
        ))}
    </div>
  );
};

export default Adventures;
// export default connect(null, { deleteAdventure })(Adventures);
// Fragment - can reduce a lot of unnecessary DOM bloat
// <React.Fragment key={adv.id}
// </React.Fragment>

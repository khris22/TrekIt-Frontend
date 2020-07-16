import React from 'react';
import { Divider } from 'semantic-ui-react';
import AdventureCard from './AdventureCard';

const Adventures = (props) => {
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

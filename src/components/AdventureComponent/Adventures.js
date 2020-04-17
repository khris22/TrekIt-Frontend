import React from 'react';
// import Adventure from './Adventure';

const Adventures = (props) => {
  //   debugger;
  console.log('ADVENTURE', props.adventures);
  //   const adventure = props.adventures;
  return (
    <div>
      <h4>Show list of past adventures here in Adventures.js</h4>
      {props.adventures &&
        props.adventures.map((adv) => (
          <>
            <h6>{adv.title}</h6>
            <p> {adv.memo}</p>
            <p>{adv.image}</p>
          </>
        ))}
    </div>
  );
};

export default Adventures;

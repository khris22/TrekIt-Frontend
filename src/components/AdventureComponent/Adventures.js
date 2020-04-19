import React from 'react';
// import Adventure from './Adventure';

const Adventures = (props) => {
  //   debugger;
  // console.log('ADVENTURE', props.adventures);
  //   const adventure = props.adventures;
  return (
    <div>
      <h4>Show list of past adventures here in Adventures.js</h4>
      {props.adventures &&
        props.adventures.map((adv) => (
          <React.Fragment key={adv.id}>
            {adv.title}
            <p> {adv.memo}</p>
            <p>{adv.image}</p>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Adventures;

// Fragment - can reduce a lot of unnecessary DOM bloat

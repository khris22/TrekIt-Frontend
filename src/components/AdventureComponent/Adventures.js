import React from 'react';
import { connect } from 'react-redux';
import { deleteAdventure } from '../../actions/adventureActions';

const Adventures = (props) => {

  const handleDelete = (adv) => {
    console.log(adv);
    props.deleteAdventure(adv.id, adv.location_id);
  };

  return (
    <div>
      <h4>Show list of past adventures here in Adventures.js</h4>
      {props.adventures &&
        props.adventures.map((adv) => (
          <li key={adv.id}>
            {adv.title}
            <p> {adv.memo}</p>
            <p>{adv.image}</p>
            <button
              onClick={() => {
                window.confirm(
                  'Are you sure you wish to delete this Adventure?',
                ) && handleDelete(adv);
              }}>
              Delete this Adventure
            </button>
          </li>
        ))}
    </div>
  );
};

// export default Adventures;
export default connect(null, { deleteAdventure })(Adventures);
// Fragment - can reduce a lot of unnecessary DOM bloat
// <React.Fragment key={adv.id}
// </React.Fragment>

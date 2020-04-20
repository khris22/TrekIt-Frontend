import React, { Component } from 'react';
import Adventures from '../components/AdventureComponent/Adventures';
import AdventureInput from '../components/AdventureComponent/AdventureInput';
import { connect } from 'react-redux';
import { addAdventure } from '../actions/adventureActions';

export class Adventure extends Component {
  render() {
    return (
      <div>
        <h5>Your Adventures:</h5>
        <AdventureInput
          addAdventure={this.props.addAdventure}
          location={this.props.location}
        />
        <Adventures
          adventures={this.props.location && this.props.location.adventures}
          // deleteAdventure={this.props.deleteAdventure}
        />
      </div>
    );
  }
}

// export const mapStateToProps = ({ adventures }) => ({ adventures });

// export default Adventure;
// export default connect(mapStateToProps, { addAdventure, deleteAdventure })(
//   Adventure,
// );

export default connect(null, { addAdventure })(Adventure);

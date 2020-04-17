import React, { Component } from 'react';
import Adventures from '../components/AdventureComponent/Adventures';
import AdventureInput from '../components/AdventureComponent/AdventureInput';
import { connect } from 'react-redux';
import { addAdventure, deleteAdventure } from '../actions/adventureActions';

export class Adventure extends Component {
  render() {
    return (
      <div>
        <h5>Your Adventures:</h5>
        <Adventures />
        <AdventureInput
          addAdventure={this.props.addAdventure}
          locationId={console.log(this.props)}
        />
      </div>
    );
  }
}

export const mapStateToProps = ({ adventures }) => ({ adventures });

export default connect(mapStateToProps, { addAdventure, deleteAdventure })(
  Adventure,
);

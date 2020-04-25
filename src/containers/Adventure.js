import React, { Component } from 'react';
import Adventures from '../components/AdventureComponent/Adventures';
import AdventureInput from '../components/AdventureComponent/AdventureInput';
import { connect } from 'react-redux';
import { addAdventure } from '../actions/adventureActions';

export class Adventure extends Component {
  render() {
    return (
      <div>
        <AdventureInput
          addAdventure={this.props.addAdventure}
          location={this.props.location}
        />
        <Adventures
          adventures={
            this.props.location &&
            this.props.location.adventures.sort((a, b) =>
              a.created_at < b.created_at ? 1 : -1,
            )
          }
          // deleteAdventure={this.props.deleteAdventure}
        />
      </div>
    );
  }
}

export default connect(null, { addAdventure })(Adventure);

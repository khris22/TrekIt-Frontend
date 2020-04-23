import React, { Component } from 'react';
import { Segment, Header, Button, Image } from 'semantic-ui-react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import {
  deleteAdventure,
  updateAdventure,
} from '../../actions/adventureActions';
import AdventureEdit from './AdventureEdit';

export class AdventureCard extends Component {
  constructor(props) {
    console.log('ADVENTURE CARD', props);
    super(props);
    this.state = {
      isEditable: false,
      // adventure: this.props.adventure,
    };
    // this.updateAdventureState = this.updateAdventureState.bind(this);
    // this.saveAdventure = this.saveAdventure.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.adventure.id !== prevProps.adventure.id) {
  //     this.setState({ adventure: prevProps.adventure });
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.adventure.id !== nextProps.adventure.id) {
  //     this.setState({ adventure: nextProps.adventure });
  //   }
  // }

  // updateAdventureState = (event) => {
  //   console.log('UPDATESTATE', event);
  //   let inputField = event.target.name;
  //   let adventure = this.state.adventure;
  //   adventure[inputField] = event.target.value;
  //   this.setState({ adventure: adventure });
  // };

  // updateAdventureState(event) {
  //   // debugger;
  //   const inputField = event.target.name;
  //   const adventure = this.state.adventure;
  //   adventure[inputField] = event.target.value;
  //   this.setState({ adventure: adventure });
  //   // this.setState({ adventure: adventure, isEditable: false });
  // }

  // saveAdventure(event) {
  //   console.log('save', event);
  //   event.preventDefault(this.state.adventure);
  //   this.props.updateAdventure(this.props);
  //   this.setState({ ...this.state, isEditable: false });
  // }

  toggleEdit() {
    this.setState({ isEditable: !this.state.isEditable });
  }

  handleDelete = (adv) => {
    console.log(adv);
    this.props.deleteAdventure(
      this.props.adventure.id,
      this.props.adventure.location_id,
    );
  };

  render() {
    // if (this.state.isEditable) {
    //   return (
    //     <div>
    //       <h2>Edit this:</h2>
    //       {/* FORM HERE */}
    //       <AdventureEdit
    //         adventure={this.props.adventure}
    //         // onSave={this.saveAdventure}
    //         // onChange={this.updateAdventureState}
    //       />
    //     </div>
    //   );
    // }
    return (
      <div>
        <Segment color='teal' key={this.props.adventure.id}>
          <Header as='h3'>{this.props.adventure.title}</Header>
          <Moment>{this.props.adventure.created_at}</Moment>
          <Image
            src={this.props.adventure.image}
            alt={this.props.adventure.title}
            size='medium'
            centered>
            {/* <Label content='Image not found!' icon='warning' /> */}
          </Image>
          <p> {this.props.adventure.memo}</p>

          {this.state.isEditable && (
            <AdventureEdit
              adventure={this.props.adventure}
              toggle={this.toggleEdit}
            />
          )}
          <Button onClick={this.toggleEdit}>Edit</Button>

          <Button
            onClick={() => {
              window.confirm(
                'Are you sure you wish to delete this Adventure?',
              ) && this.handleDelete(this.props.adventure);
            }}>
            Delete this Adventure
          </Button>
        </Segment>
      </div>
    );
  }
}

// export default AdventureCard
export default connect(null, { deleteAdventure, updateAdventure })(
  AdventureCard,
);

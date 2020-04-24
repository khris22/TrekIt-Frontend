import React, { Component } from 'react';
import {
  Segment,
  Header,
  Button,
  Image,
  Divider,
  Icon,
  Grid,
} from 'semantic-ui-react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteAdventure } from '../../actions/adventureActions';
import AdventureEdit from './AdventureEdit';

export class AdventureCard extends Component {
  constructor(props) {
    console.log('ADVENTURE CARD', props);
    super(props);
    this.state = {
      isEditable: false,
    };
  }

  toggleEdit = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  handleDelete = (adv) => {
    console.log(adv);
    this.props.deleteAdventure(
      this.props.adventure.id,
      this.props.adventure.location_id,
    );
  };

  render() {
    if (this.state.isEditable) {
      return (
        <div>
          {/* FORM HERE */}
          <AdventureEdit
            adventure={this.props.adventure}
            toggle={this.toggleEdit}
          />
        </div>
      );
    }
    return (
      <div>
        <Segment color='teal' key={this.props.adventure.id}>
          <center>
            <Header as='h3'>{this.props.adventure.title}</Header>
            <Moment format='LLLL'>{this.props.adventure.created_at}</Moment>
          </center>
          <br />
          <Grid columns={2} divided>
            <Grid.Column>
              <Image
                src={this.props.adventure.image}
                alt={this.props.adventure.title}
                size='medium'
                // floated='left'
                centered>
                {/* <Label content='Image not found!' icon='warning' /> */}
              </Image>
            </Grid.Column>
            <Grid.Column>
              <Header as='h5'>Memories:</Header>
              <p>{this.props.adventure.memo}</p>

              {/* SAVE THIS & DECIDE WHICH FORMAT IS BETTER */}
              {/* {this.state.isEditable && (
            <AdventureEdit
              adventure={this.props.adventure}
              toggle={this.toggleEdit}
            />
          )} */}
              <Button
                onClick={this.toggleEdit}
                icon
                floated='right'
                labelPosition='left'>
                <Icon name='edit' />
                Edit
              </Button>

              <Button
                icon
                // floated='left'
                labelPosition='left'
                onClick={() => {
                  window.confirm(
                    'Are you sure you wish to delete this Adventure?',
                  ) && this.handleDelete(this.props.adventure);
                }}>
                <Icon name='delete' />
                Delete
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
        <Divider />
      </div>
    );
  }
}

export default connect(null, { deleteAdventure })(AdventureCard);

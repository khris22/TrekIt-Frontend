import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateAdventure } from '../../actions/adventureActions';

export class AdventureEdit extends Component {
  constructor(props) {
    // console.log('EDIT', props);
    super(props);
    this.state = {
      title: this.props.adventure.title,
      memo: this.props.adventure.memo,
      image: this.props.adventure.image,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    let adventure = {
      ...this.state,
      id: this.props.adventure.id,
      location_id: this.props.adventure.location_id,
    };
    this.props.updateAdventure(adventure);
    this.props.toggle();
  };

  render() {
    return (
      <div>
        <Segment tertiary>
          <h3>EDIT</h3>
          <Form onSubmit={this.handleUpdate}>
            <Form.Group widths='equal'>
              <Form.Input
                type='text'
                name='title'
                fluid
                label='Title:'
                placeholder='Give your adventure a title!'
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
              <Form.Input
                type='text'
                name='image'
                fluid
                label='Image Url:'
                placeholder='Attached the image url here.'
                value={this.state.image}
                onChange={this.handleChange}
              />
            </Form.Group>
            <label>Memory: </label>
            <Form.TextArea
              name='memo'
              placeholder='Tell me all about your adventure...'
              value={this.state.memo}
              onChange={this.handleChange}
            />

            <center>
              <Form.Button primary type='submit'>
                Save this Adventure
              </Form.Button>
            </center>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default connect(null, { updateAdventure })(AdventureEdit);

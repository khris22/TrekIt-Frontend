import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export class AdventureInput extends Component {
  state = {
    title: '',
    memo: '',
    image: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAdventure(this.state, this.props.location.id);
    this.setState({
      title: '',
      memo: '',
      image: '',
    });
  };

  render() {
    return (
      <div>
        <h3>Add a New Adventure:</h3>
        <Form onSubmit={this.handleSubmit}>
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
          <label>Memories: </label>
          <Form.TextArea
            name='memo'
            placeholder='Add memories about your adventure...'
            value={this.state.memo}
            onChange={this.handleChange}
          />

          {/* check if this is right? */}
          <center>
            <Form.Button color='google plus' type='submit'>
              Add this adventure to your list
            </Form.Button>
          </center>
        </Form>
      </div>
    );
  }
}

export default AdventureInput;

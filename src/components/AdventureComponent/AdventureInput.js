import React, { Component } from 'react';

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
    // Add actions here to dispatch
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
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            placeholder='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label>Memory: </label>
          <textarea
            // type='text'
            name='memo'
            placeholder='memo'
            value={this.state.memo}
            onChange={this.handleChange}
          />
          <br />
          <label>Image Url: </label>

          {/* check if this is right? */}
          <input
            type='text'
            name='image'
            placeholder='image url'
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default AdventureInput;

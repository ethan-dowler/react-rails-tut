import React, { Component } from 'react';

const INITIAL_STATE = {
  title: '',
  description: ''
}

class NewItemForm extends Component {
  state = INITIAL_STATE;

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(INITIAL_STATE);
  }

  onChange = (event) => {
    const input = event.target;
    this.setState({
      [input.name]: input.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text" 
            name="title" 
            value={this.state.title}
            onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onChange} />
        </div>
        <button>Add New Item</button>
      </form>
    );
  }
}

export default NewItemForm;
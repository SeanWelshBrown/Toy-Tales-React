import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInitialFormSubmit = (event) => {
    event.preventDefault()
    this.props.handleFormSubmit(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleInitialFormSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." value={this.state.toyName} onChange={this.handleFormChange} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." value={this.state.toyURL} onChange={this.handleFormChange} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;

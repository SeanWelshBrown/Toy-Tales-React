import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toys: data
  }

  handleFormSubmit = (toyFormState) => {
    let newToy = toyFormState
    newToy.id = (Math.floor(Math.random() * 100))
    newToy.likes = 0
    let newToysArray = [...this.state.toys, newToy]
    this.setState({
      toys: newToysArray
    })
  }
  
  handleDeleteToy = (toyID) => {
    let newToysArray = this.state.toys.filter( toy => toy.id !== toyID)
    this.setState({
      toys: newToysArray
    })
  }

  handleLikeToy = (toyID) => {
    let newToysArray = this.state.toys.slice()
    newToysArray[newToysArray.findIndex(el => el.id === toyID)].likes += 1
    this.setState({
      toys: newToysArray
    })
  }

  render(){
    return (
      <>
        <Header />
        <ToyForm handleFormSubmit={this.handleFormSubmit} />
        <ToyContainer 
          handleDeleteToy={this.handleDeleteToy}
          handleLikeToy={this.handleLikeToy}
          toys={this.state.toys} 
        />
      </>
    );
  }

}

export default App;

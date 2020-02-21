import React from 'react';
import ToyCard from './ToyCard'
import { render } from '@testing-library/react';

class ToyContainer extends React.Component {

  render() {

    let toyCards = this.props.toys.map( toy => {
      return <ToyCard key={toy.id} toy={toy} handleDeleteToy={this.props.handleDeleteToy} handleLikeToy={this.props.handleLikeToy} />
    })

    return(
      <div id="toy-collection">
        {toyCards}
      </div>
    );
  }
}

export default ToyContainer;

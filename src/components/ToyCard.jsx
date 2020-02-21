import React, { Component } from 'react';

class ToyCard extends Component {

  onClickDelete = () => {
    this.props.handleDeleteToy(this.props.toy.id)
  }

  onClickLike = () => {
    this.props.handleLikeToy(this.props.toy.id)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.onClickLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.onClickDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;

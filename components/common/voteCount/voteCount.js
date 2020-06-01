import React, { Component } from 'react';
import './voteCount.scss'

class VoteCount extends Component {
  state = { 
    voteCount: 0,
   }

  componentDidMount() {
    let upvoteObject = JSON.parse(localStorage.getItem('upvoteObject')) || {};
    
    upvoteObject[this.props.objectID] = {
      points: upvoteObject[this.props.objectID] ? upvoteObject[this.props.objectID].points : this.props.voteCount,
    }
    localStorage.setItem('upvoteObject', JSON.stringify(upvoteObject));
    this.setState({
      voteCount: upvoteObject[this.props.objectID].points,
    });
  }

  voteCountUpdate(event) {
    event.preventDefault();
    let upvoteObject = JSON.parse(localStorage.getItem('upvoteObject'));
    let updatedCount = this.state.voteCount + 1;
    this.setState({
      ...this.state,
      voteCount: updatedCount,
    })
    upvoteObject[this.props.objectID].points = updatedCount;
    localStorage.setItem('upvoteObject', JSON.stringify(upvoteObject));
  }

  render() {
    const colorClass = (this.state.voteCount < 100) ? (this.state.voteCount < 50) ? 'lessVotes' : 'mediumVotes' : 'extraVotes';
    return ( 
      <a className = {`voteCount ${colorClass}`} href="" onClick = {(event) => this.voteCountUpdate(event)} >{this.state.voteCount}</a>
     );
  }
}
 
export default VoteCount;

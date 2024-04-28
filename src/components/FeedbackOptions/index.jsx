import css from './index.module.css';
import React, { Component } from 'react';
import { Votes } from 'shared/enum';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className="feedbackOptions">
        <button onClick={() => this.props.addVote(Votes.good)}>Good</button>
        <button onClick={() => this.props.addVote(Votes.neutral)}>Neutral</button>
        <button onClick={() => this.props.addVote(Votes.bad)}>Bad</button>
      </div>
    );
  }
}

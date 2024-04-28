import css from './index.module.css';
import React, { Component } from 'react';
import { Votes, voteName } from 'shared/enum';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className="feedbackOptions">
        <button onClick={() => this.props.addVote(Votes.good)}>{voteName(Votes.good)}</button>
        <button onClick={() => this.props.addVote(Votes.neutral)}>{voteName(Votes.neutral)}</button>
        <button onClick={() => this.props.addVote(Votes.bad)}>{voteName(Votes.bad)}</button>
      </div>
    );
  }
}

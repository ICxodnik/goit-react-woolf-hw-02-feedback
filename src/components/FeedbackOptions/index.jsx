import css from './index.module.css';
import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  getOptions() {
    let content = [];
    for (const vote in this.props.options) {
      content.push(
        <button className={css.button} key={vote} onClick={() => this.props.addVote(vote)}>
          {this.props.options[vote]}
        </button>
      );
    }
    return content;
  }

  render() {
    return <div className={css.feedbackOptions}>{this.getOptions()}</div>;
  }
}

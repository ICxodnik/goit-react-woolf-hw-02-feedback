import css from './index.module.css';
import React, { Component } from 'react';
import { getOptionName } from 'shared/optionsEnum';

export default class FeedbackOptions extends Component {
  getOptions() {
    let content = [];
    for (const vote in this.props.options) {
      content.push(
        <button key={vote} onClick={() => this.props.addVote(vote)}>
          {getOptionName(vote)}
        </button>
      );
    }
    return content;
  }

  render() {
    return <div className="feedbackOptions">{this.getOptions()}</div>;
  }
}

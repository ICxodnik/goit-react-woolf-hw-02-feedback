import css from './index.module.css';
import React, { Component } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from 'components/FeedbackOptions';
import { Options } from 'shared/optionsEnum';

export default class Feedback extends Component {
  // static propTypes = { second: PropTypes.string.isRequired };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStatisticData() {
    return {
      ...this.state,
      totalCount: this.getTotalCount(this.state),
      totalPercent: this.getTotalPercent(this.state),
    };
  }

  getTotalCount = data => {
    return data.good + data.neutral + data.bad;
  };

  getTotalPercent = data => {
    return Math.round((data.good / this.getTotalCount(data)) * 100);
  };

  addVote = vote => {
    this.setState(prevState => {
      return { [vote]: prevState[vote] + 1 };
    });
  };

  render() {
    return (
      <div className="feedback">
        <Statistic data={this.getStatisticData()} />
        <FeedbackOptions options={Options} addVote={this.addVote} />
      </div>
    );
  }
}

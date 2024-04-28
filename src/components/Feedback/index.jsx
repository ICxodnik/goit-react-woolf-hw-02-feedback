import css from './index.module.css';
import React, { Component } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from 'components/FeedbackOptions';
import PropTypes from 'prop-types';
import { Votes } from 'shared/enum';

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
      totalPercent: (this.state.good / this.getTotalCount(this.state)) * 100,
    };
  }

  getTotalCount = data => {
    return data.good + data.neutral + data.bad;
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
        <FeedbackOptions addVote={this.addVote} />
      </div>
    );
  }
}

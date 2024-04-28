import css from './index.module.css';
import React, { Component } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from 'components/FeedbackOptions';
import PropTypes from 'prop-types';

export default class Feedback extends Component {
  static propTypes = { second: PropTypes.string.isRequired };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStatisticData() {
    return {
      ...this.state,
      totalCount: this.getTotalCount(this.state),
      totalPercent: this.state.good / this.getTotalCount(this.state),
    };
  }

  getTotalCount = data => {
    return data.good + data.neutral + data.bad;
  };

  render() {
    return (
      <div className="feedback">
        <Statistic data={this.getStatisticData()} />
        <FeedbackOptions />
      </div>
    );
  }
}

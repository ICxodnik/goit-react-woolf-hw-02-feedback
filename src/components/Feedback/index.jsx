import css from './index.module.css';
import React, { Component } from 'react';
import Statistic from 'components/Statistic';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { Options } from 'shared/optionsEnum';
import { Notification } from 'components/Notification';

export default class Feedback extends Component {
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
    const showStatistic = this.getTotalCount(this.state);

    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Options} addVote={this.addVote} />
        </Section>
        {showStatistic ? (
          <Section title="Statistics">
            <Statistic data={this.getStatisticData()} />
          </Section>
        ) : (
          <div className="statistic">
            <Notification level="info" message="There is no feedback" />
          </div>
        )}
      </div>
    );
  }
}

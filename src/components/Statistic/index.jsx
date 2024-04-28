import css from './index.module.css';
import React, { Component } from 'react';

export default class Statistic extends Component {
  render() {
    if (this.props.data.totalCount === 0) {
      return (
        <div className="statistic">
          <div className="statisticError">
            <p>No feedback given</p>
          </div>
        </div>
      );
    }
    return (
      <div className="statistic">
        <ul className="statisticData">
          <li>Good: {this.props.data.good}</li>
          <li>Neutral: {this.props.data.neutral}</li>
          <li>Bad: {this.props.data.bad}</li>
          <li>Total: {this.props.data.totalCount}</li>
          <li>Positive feedback: {this.props.data.totalPercent}%</li>
        </ul>
      </div>
    );
  }
}

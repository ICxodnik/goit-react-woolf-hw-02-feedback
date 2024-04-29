import css from './index.module.css';
import React, { Component } from 'react';
import { Notification } from 'components/Notification';

export default class Statistic extends Component {
  render() {
    if (this.props.data.totalCount === 0) {
      return (
        <div className="statistic">
          <Notification level="info" message="There is no feedback" />
        </div>
      );
    }
    return (
      <ul className={css.statisticData}>
        <li className={css.dataEl}>
          <span className={css.title}>Good:</span>
          <span className={css.value}>{this.props.data.good}</span>
        </li>
        <li className={css.dataEl}>
          <span className={css.title}>Neutral:</span>
          <span className={css.value}>{this.props.data.neutral}</span>
        </li>
        <li className={css.dataEl}>
          <span className={css.title}>Bad:</span>
          <span className={css.value}>{this.props.data.bad}</span>
        </li>
        <li className={css.dataEl}>
          <span className={css.title}>Total:</span>
          <span className={css.value}>{this.props.data.totalCount}</span>
        </li>
        <li className={css.dataEl}>
          <span className={css.title}>Positive feedback:</span>
          <span className={css.value}>{this.props.data.totalPercent}%</span>
        </li>
      </ul>
    );
  }
}

import css from './index.module.css';
import React from 'react';

export default function Statistic({ data }) {
  return (
    <ul className={css.statisticData}>
      <li className={css.dataEl}>
        <span className={css.title}>Good:</span>
        <span className={css.value}>{data.good}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Neutral:</span>
        <span className={css.value}>{data.neutral}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Bad:</span>
        <span className={css.value}>{data.bad}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Total:</span>
        <span className={css.value}>{data.totalCount}</span>
      </li>
      <li className={css.dataEl}>
        <span className={css.title}>Positive feedback:</span>
        <span className={css.value}>{data.totalPercent}%</span>
      </li>
    </ul>
  );
}

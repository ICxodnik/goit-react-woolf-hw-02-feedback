import css from './index.module.css';
import React from 'react';

export default function FeedbackOptions(props) {
  /*use vote enum to receive name and value*/
  return (
    <div className={css.feedbackOptions}>
      {Object.keys(props.options).map(vote => (
        <button
          className={css.button}
          key={vote}
          onClick={() => props.addVote(vote)} /*vote value*/
        >
          {props.options[vote] /*vote name*/}
        </button>
      ))}
    </div>
  );
}

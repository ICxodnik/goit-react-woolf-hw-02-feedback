import React, { Component } from 'react';
import css from 'components/Section/index.module.css';

export default class Section extends Component {
  render() {
    return (
      <div className={css.section}>
        <h2>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

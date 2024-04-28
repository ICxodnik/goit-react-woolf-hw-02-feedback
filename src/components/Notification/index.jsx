import css from './index.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
  static propTypes = {
    level: PropTypes.string,
    message: PropTypes.string.isRequired,
  };
  static defaultProps = {
    level: 'warning',
  };

  render() {
    return {
      info: <div className="info">{this.props.message}</div>,
      warning: <div className="warning">{this.props.message}</div>,
      error: <div className="error">{this.props.message}</div>,
    }[this.props.level];
  }
}

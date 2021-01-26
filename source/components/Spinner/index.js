// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

const mapStateToProps = ({ ui }) => ({
  isFetching: ui.get('isFetching'),
});

@connect(mapStateToProps)
export class Spinner extends Component {
  static defaultProps = {
    isFetching: false,
  };

  render() {
    const { isFetching } = this.props;

    return isFetching ? <div className={Styles.spinner} /> : null;
  }
}

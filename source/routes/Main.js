// Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
// Routs
import Private from './Private';
import Public from './Public';
// Actions
import { authActions } from '../bus/auth/action';
// Component
import { Loading } from '../components/Loading';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.get('isAuthenticated'),
  isInitialized: auth.get('isInitialized'),
});

const mapDispatchToProps = {
  initializeAsync: authActions.initializeAsync,
};

@hot(module)
@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Main extends Component {
  componentDidMount() {
    this.props.initializeAsync();
  }

  render() {
    const { isAuthenticated, isInitialized } = this.props;

    if (!isInitialized) {
      return <Loading />;
    }

    return isAuthenticated ? <Private /> : <Public />;
  }
}

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
// WebSocket
import { socket, joinSocketChannel } from '../init/socket';
import { socketActions } from '../bus/socket/actions';

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.get('isAuthenticated'),
  isInitialized: auth.get('isInitialized'),
});

const mapDispatchToProps = {
  initializeAsync: authActions.initializeAsync,
  ...socketActions,
};

@hot(module)
@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Main extends Component {
  componentDidMount() {
    const { initializeAsync, listenConnections } = this.props;
    initializeAsync();
    joinSocketChannel();
    listenConnections();
  }

  componentWillUnmount() {
    socket.removeListener('connect');
    socket.removeListener('disconnect');
  }

  render() {
    const { isAuthenticated, isInitialized, listenPosts } = this.props;

    if (!isInitialized) {
      return <Loading />;
    }

    return isAuthenticated ? <Private listenPosts={listenPosts} /> : <Public />;
  }
}

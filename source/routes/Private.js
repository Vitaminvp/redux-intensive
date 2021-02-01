// Core
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Pages
import { Feed, NewPassword, Profile } from '../pages';
//Instruments
import { book } from './book';
//Socket
import { socket } from '../init/socket';

export default class Private extends Component {
  componentDidMount() {
    const { listenPosts } = this.props;
    listenPosts();
  }
  componentWillUnmount() {
    socket.removeListener('create');
    socket.removeListener('remove');
  }

  render() {
    return (
      <Switch>
        <Route component={Feed} path={book.feed} />
        <Route component={Profile} path={book.profile} />
        <Route component={NewPassword} path={book.newPassword} />
        <Redirect to={book.feed} />
      </Switch>
    );
  }
}

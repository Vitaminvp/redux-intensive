// Core
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Pages
import { Feed, NewPassword, Profile } from '../pages';
//Instruments
import { book } from './book';

export default class Private extends Component {
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

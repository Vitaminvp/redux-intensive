import React, { Component } from 'react';
import { Posts } from '../components/Posts';
import { Spinner } from '../components/Spinner';

export class App extends Component {
  render() {
    return (
      <div>
        <Spinner />
        <Posts />
      </div>
    );
  }
}

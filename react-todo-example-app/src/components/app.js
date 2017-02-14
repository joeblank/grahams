import React, { Component } from 'react';

import InputBar from './input_bar';
import List from './list';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <List />
      </div>
    );
  }
}

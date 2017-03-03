import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <a href='http://localhost:3333/auth'><button type="" className="">Login</button></a>
        <div className="">app.js</div>
        {this.props.children}
      </div>
    )
  }
}

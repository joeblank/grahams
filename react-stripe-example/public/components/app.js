import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <h1>React - Auth0</h1>
        <a href='http://localhost:3333/auth'><button type="" className="">Login</button></a>
        <br/><br/>
        {this.props.children}
      </div>
    )
  }
}

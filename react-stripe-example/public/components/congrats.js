import React, { Component } from 'react';
import axios from 'axios';

export default class Congrats extends Component {
  componentWillMount() {
    axios.get('http://localhost:3333/isAuthed').then(function(response) {
      console.log('hey',response);
    })
  }

  render() {
    return (
      <div className="">Congrats on a successful login!</div>
    )
  }
}

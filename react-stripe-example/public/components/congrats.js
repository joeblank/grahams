import React, { Component } from 'react';
import axios from 'axios';

export default class Congrats extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentWillMount() {
    axios.get('http://localhost:3333/isAuthed').then(function(response) {
    console.log(response);
  },function(error) {
    console.log(error);
  })

  }


  render() {
    return (
      <div className="">Congrats on a successful login!</div>
    )
  }
}

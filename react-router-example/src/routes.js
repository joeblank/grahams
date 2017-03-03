import React from 'react';
import { Route, IndexRoute } from 'react-router';
import axios from 'axios';

import App from './components/app';
import Private from './components/private';

function Nope() {
  return (
    <div className="">hey man</div>
  )
}

function handleEnter() {
  return axios.get('http://localhost:3333/user/authed').then(response => {
    console.log(response);
  }, err => {console.log(err);})
}

export default (
<Route path='/' component={App}>
  <IndexRoute  component={Nope}/>
  <Route
    onEnter={handleEnter}
    path='private'
    component={Private} />
</Route>
);

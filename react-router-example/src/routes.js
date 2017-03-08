import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import axios from 'axios';

import App from './components/app';
import Private from './components/private';

function Nope() {
  return (
    <div className="instructions">
      <a href='http://localhost:3333/auth'><button type="" className="btn btn-primary">Login</button></a>
    <p>This is the home route</p>
    <p>The private route cannot be accessed unless you are logged in.</p>
    <p>Test: try to navigate to private route in url before log in.</p>
    <Link to='private'><button type="" className="btn btn-danger">Private Route</button></Link>
    </div>
  )
}

function requireAuth(nextState, replace, callback) {
  return axios
  .get('http://localhost:3333/user/authed', {withCredentials: true})
  .then(response => {
    console.log(response);
    console.log(nextState);
    if (response.status === 201) {
      alert('Please log in to view private route.')
      replace('/');
      return callback();
    }
    return callback();
  })
}
export default (
<Route path='/' component={App}>
  <IndexRoute  component={Nope}/>
  <Route
    onEnter={requireAuth}
    path='private'
    component={Private} />
</Route>
);

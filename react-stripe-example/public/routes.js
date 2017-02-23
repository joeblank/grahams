import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Congrats from './components/congrats';

export default (
  <Route path='/' component={App}>
    <Route path='/son' component={Congrats} />
  </Route>

)

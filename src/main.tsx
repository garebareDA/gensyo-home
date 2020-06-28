'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from './routers/home';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app
);
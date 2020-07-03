import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

import {
  HashRouter,
} from 'react-router-dom';

const app = document.getElementById('app');
ReactDOM.render(
  <div>
    <HashRouter>
      <App />
    </HashRouter>
  </div>,
  app
);
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

import {
  BrowserRouter,
} from 'react-router-dom';

const app = document.getElementById('app');
ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  app
);
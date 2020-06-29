import * as React from 'react';
import Home from './routers/home';
import AppBar from './parts/appbar';

import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

interface Props extends RouteComponentProps<{}>{}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <AppBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='download' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
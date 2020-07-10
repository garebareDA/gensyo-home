import * as React from 'react';
import Home from './routers/home';
import AppBar from './parts/appbar';
import Download from './routers/download';
import Podcast from './routers/podcast';
import {Paper} from '@material-ui/core';

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
      <Paper elevation={3}>
        <AppBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/download' exact component={Download}/>
          <Route path='/podcast' exact component={Podcast}/>
        </Switch>
      </Paper>
    );
  }
}

export default withRouter(App);
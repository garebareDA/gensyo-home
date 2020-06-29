import * as React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

const styles = () => createStyles({
  list: {
    width: 200,
  }
});

interface Props extends RouteComponentProps,WithStyles<typeof styles> { }

interface State {
  open: boolean,
}

class AppBarGensyo extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    }
  }

  routePush = (url: string) => {
    this.props.history.push(url);
  }

  toggleDrawer = (toggle: boolean) => {
    this.setState({ open: toggle });
  }

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton onClick={() => this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography>
              原初へ還る
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={() => this.toggleDrawer(false)}>
          <List className={this.props.classes.list}>
            <ListItem button onClick={() => {this.toggleDrawer(false); this.routePush('/')}}>
              <ListItemText primary="ホーム" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="配布物" onClick={() => {this.toggleDrawer(false); this.routePush('download')}} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(AppBarGensyo));
import * as React from 'react';
import { withRouter, RouteComponentProps, } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Menu, Home, CloudDownload } from '@material-ui/icons';

const styles = () => createStyles({
  list: {
    width: 200,
  },

  linkList: {
    marginLeft: '10%',
  },

  title: {
    textAlign: 'right'
  }
});

interface Props extends RouteComponentProps, WithStyles<typeof styles> { }

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
        <div>
          <AppBar color={"primary"}>
            <Toolbar>
              <IconButton onClick={() => this.toggleDrawer(true)}>
                <Menu />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <Drawer open={this.state.open} onClose={() => this.toggleDrawer(false)}>
          <List className={this.props.classes.list}>
            <ListItem button onClick={() => { this.toggleDrawer(false); this.routePush('/') }}>
              <Home />
              <ListItemText primary="ホーム" className={this.props.classes.linkList} />
            </ListItem>
            <ListItem button onClick={() => { this.toggleDrawer(false); this.routePush('download') }}>
              <CloudDownload />
              <ListItemText className={this.props.classes.linkList} primary="配布物" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(AppBarGensyo));
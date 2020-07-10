import * as React from 'react';
import { withRouter, RouteComponentProps, } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles,} from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Menu, Home, CloudDownload, MusicNote } from '@material-ui/icons';

const styles = () => createStyles({
  list: {
    width: 200,
  },

  linkList: {
    marginLeft: '10%',
  },

  title: {
    textAlign: 'right'
  },

  icon:{
    color:"#eceff1"
  },

  appbar: {
    backgroundColor:"#1e88e5"
  },
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
        <AppBar className={this.props.classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => this.toggleDrawer(true)}>
              <Menu className={this.props.classes.icon}/>
            </IconButton>
          </Toolbar>
        </AppBar>

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

            <ListItem button onClick={() => { this.toggleDrawer(false); this.routePush('podcast') }}>
              <MusicNote />
              <ListItemText className={this.props.classes.linkList} primary="ポッドキャスト" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(AppBarGensyo));
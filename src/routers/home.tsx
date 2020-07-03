import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, Container, BottomNavigation, BottomNavigationAction, } from '@material-ui/core';
import { createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import withStyles, { WithStyles, } from '@material-ui/core/styles/withStyles';
import { Assessment, AccountBox } from '@material-ui/icons';
import theme from '../color/theme';
import Overview from '../parts/overview';
import Member from '../parts/memver';

const styles = () => createStyles({
  div: {
    textAlign: 'center'
  },

  cardTop: {
    marginTop: '10vh',
    textAlign: 'center',
  },

  image: {
    height: "30vh",
  },

  top: {
    marginTop: '1vh',
    textAlign: 'center',
  },

  icno: {
    color: "#ff80ab",
  }
});


interface prop extends WithStyles<typeof styles> { }
interface state {
  value: string,
  view: JSX.Element,
}

class Home extends React.Component<prop, state> {

  constructor(props: prop) {
    super(props);
    this.state = {
      value: "Overview",
      view: <Overview />,
    }
  }

  valueChange = (event: React.ChangeEvent<{}>, value: string) => {
    if (value === "Overview") {
      this.setState({ view: <Overview /> });
    } else {
      this.setState({ view: <Member /> });
    }
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Container className={this.props.classes.div} >
          <Card className={this.props.classes.cardTop} variant="outlined">
            <CardMedia
              className={this.props.classes.image}
              image="/images/gensyologo.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                原初へ還る
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Discordのサーバーから発足したグループとかそんな感じ
              </Typography>
            </CardContent>
          </Card>
        </Container>
        <ThemeProvider theme={theme}>
          <Container className={this.props.classes.top}>
            <BottomNavigation value={this.state.value} onChange={this.valueChange}>
              <BottomNavigationAction label="概要" value="Overview" showLabel={true} icon={<Assessment fontSize='large' />} />
              <BottomNavigationAction label="メンバー" value="Member" showLabel={true} icon={<AccountBox fontSize='large' />} />
            </BottomNavigation>
          </Container>
        </ThemeProvider>
        {this.state.view}
      </div>
    )
  }
}

export default withStyles(styles)(Home);
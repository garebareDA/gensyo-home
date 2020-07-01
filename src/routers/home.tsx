import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, Container, BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import gensyologo from '../../images/gensyologo.png';
import { YouTube } from '@material-ui/icons';

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

  top:{
    marginTop: '1vh',
    textAlign: 'center',
  }
});


interface prop extends WithStyles<typeof styles> { }
interface state {
  value: string,
}

class Home extends React.Component<prop, state> {

  constructor(props: prop) {
    super(props);
    this.state = {
      value: "Overview"
    }
  }

  valueChange = (event: React.ChangeEvent<{}>, value: string) => {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Container className={this.props.classes.div} >
          <Card className={this.props.classes.cardTop} variant="outlined">
            <CardMedia
              className={this.props.classes.image}
              image="../../images/gensyologo.png"
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

        <Container className={this.props.classes.top}>
          <BottomNavigation value={this.state.value} onChange={this.valueChange}>
            <BottomNavigationAction label="概要" value="Overview" showLabel={true} />
            <BottomNavigationAction label="メンバー" value="Member" showLabel={true} />
          </BottomNavigation>
        </Container>

        <Container className={this.props.classes.top}>
          <Card className={this.props.classes.top} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                Youtubeで実況などしております
              </Typography>
              <Typography>
                何か書くこと無いですか
              </Typography>
                <YouTube/>
            </CardContent>
          </Card>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Home);
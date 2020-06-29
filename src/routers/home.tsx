import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, Container } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import gensyologo from '../../images/gensyologo.png';

const styles = () => createStyles({
  div: {
    textAlign: 'center'
  },

  card: {
    marginTop: '10vh',
    textAlign: 'center',
  },

  image: {
    height: "30vh",
  }
});

interface prop extends WithStyles<typeof styles> { }

class Home extends React.Component<prop> {
  render() {
    return (
      <Container className={this.props.classes.div}>
        <Card className={this.props.classes.card}>
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
    )
  }
}

export default withStyles(styles)(Home);
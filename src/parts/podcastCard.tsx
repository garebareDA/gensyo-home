import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, Container } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles, } from '@material-ui/core/styles/withStyles';

const styles = () => createStyles({
  div: {
    textAlign: 'center',
    width: '80%'
  },

  cardTop: {
    marginTop: '10vh',
  },

  image: {
    height: '200px',
  },

  top: {
    marginTop: '1vh',
    textAlign: 'center',
  },
});


interface prop extends WithStyles<typeof styles> {
  image: string,
  title: string,
  url: string,
}
interface state { }

class Home extends React.Component<prop, state> {

  render() {
    return (
      <Container className={this.props.classes.div} >
        <Card className={this.props.classes.cardTop} variant="outlined">
          <CardMedia
            className={this.props.classes.image}
            image={this.props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {this.props.title}
            </Typography>
            <audio src={this.props.url} controls controlsList="nodownload"></audio>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(Home);
import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, Container} from '@material-ui/core';
import { createStyles} from '@material-ui/core/styles';
import withStyles, { WithStyles, } from '@material-ui/core/styles/withStyles';
import logo from '../../images/gensyologo.png';

const styles = () => createStyles({
  div: {
    textAlign: 'center'
  },

  cardTop: {
    marginTop: '10vh',
    textAlign: 'center',
  },

  image: {
    height: "100px",
  },

  top: {
    marginTop: '1vh',
    textAlign: 'center',
  },

  icno: {
    color: "#ff80ab",
  }
});


interface prop extends WithStyles<typeof styles> {
  image:string,
  title:string,
  url:string,
}
interface state {}

class Home extends React.Component<prop, state> {

  render() {
    return (
      <Container className={this.props.classes.div} >
        <Card className={this.props.classes.cardTop} variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {this.props.title}
              </Typography>
            <audio src={this.props.url} controls controlsList="nodownload"></audio>

          </CardContent>
          <CardMedia
            className={this.props.classes.image}
            image={this.props.image}
          />
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(Home);
import * as React from 'react';
import { Card, CardContent, Container, Typography, } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

const styles = () => createStyles({
  top: {
    marginTop: '1vh',
    textAlign: 'center',
    paddingBottom: '3vh',
    width:'50%',
  },

  card: {
    marginTop: '1vh',
  },

  image: {
    borderRadius: '50%',
    width:'80px',
    height:'80px'
  }
});

interface prop extends WithStyles<typeof styles> {
  name: string,
  image: string,
  value: string,
}

interface state { }

class Avatars extends React.Component<prop, state> {
  render() {
    return (
      <Container className={this.props.classes.top}>
        <Card className={this.props.classes.card} variant="outlined">
          <CardContent>
            <div>
              <img src={this.props.image} className={this.props.classes.image}/>
              <Typography variant="h5"> {this.props.name} </Typography>
              <Typography variant="body2" color="textSecondary" component="p"> {this.props.value} </Typography>
            </div>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(Avatars);
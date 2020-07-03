import * as React from 'react';
import { Card, CardContent, Container, Typography, } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

const styles = () => createStyles({
  top: {
    marginTop: '1vh',
    textAlign: 'center',
    paddingBottom: '3vh',
    width: '70%',
  },

  card: {
    marginTop: '1vh',
  },

  image: {
    borderRadius: '50%',
    width: '80px',
    height: '80px'
  }
});

interface prop extends WithStyles<typeof styles> { }

interface state { }
class Download extends React.Component<prop, state> {
  render() {
    return (
      <Container className={this.props.classes.top}>
        <Card className={this.props.classes.card} variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              VerticalSideGame
          </Typography>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(Download);
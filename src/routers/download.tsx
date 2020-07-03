import * as React from 'react';
import { Card, CardContent, Container, Typography, Button } from '@material-ui/core';
import { createStyles, ThemeProvider } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import theme from '../color/theme'

const styles = () => createStyles({
  div: {
    textAlign: 'center',
    paddingTop: '3%',
    paddingBottom: '3%',
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

  button: {
    marginTop: "3%",
    color:"#fafafa",
  },
});

interface prop extends WithStyles<typeof styles> { }

interface state { }
class Download extends React.Component<prop, state> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container className={this.props.classes.div} >
          <Card className={this.props.classes.cardTop} variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                VerticalSideGame
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ランダムに表示される矢印の方向に向くだけのゲーム
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                マインクラフトの配布ワールドです
          </Typography>
              <Button color='primary' variant="contained" href="../../upload/VerticalSideGame.zip" className={this.props.classes.button}>ダウンロード</Button>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    )
  }
}

export default withStyles(styles)(Download);
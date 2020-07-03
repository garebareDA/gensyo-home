import * as React from 'react';
import { Card, CardContent, Typography, Container, Button } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { YouTube } from '@material-ui/icons';
import { typography } from 'material-ui/styles';

const styles = () => createStyles({
  top: {
    marginTop: '1vh',
    textAlign: 'center',
    paddingBottom: '3vh',
  },

  card: {
    marginTop: '1vh',
  },

  icon: {
    marginTop: '5%',
  },

  typography: {
    textDecoration:"underline",
    color:"#d50000",
  },

  title: {
    marginBottom: '5vh'
  },

  youtube: {
    color:"#d50000",
  }
});

interface prop extends WithStyles<typeof styles> { }


class OverView extends React.Component<prop> {
  render() {
    const openYoutube = () => {
      window.location.replace("https://www.youtube.com/channel/UCcViiRZ4eJwPOe9BKeFfAGQ/");
    }

    return (
      <Container className={this.props.classes.top}>
        <Card className={this.props.classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="p" className={this.props.classes.title}>
              Youtubeで実況などしております
          </Typography>
            <Typography color="textSecondary" component="p">
              あのトトロいるもんの名言で有名なRouru（ロウル）さんが
          </Typography>
            <Typography color="textSecondary" component="p">
              Discordでサーバーを作ったところからノリで
          </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              ノリで！
          </Typography>
            <Typography color="textSecondary" component="p">
              Youtubeチャンネルを作り、ホームページを作りグループになりました。
          </Typography>
            <div className={this.props.classes.icon}>
              <Button onClick={openYoutube}>
                <YouTube fontSize="large" className={this.props.classes.youtube}/>
                <Typography component="p" className={this.props.classes.typography}>
                  Youtubeチャンネル
                </Typography>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    )
  }
}

export default withStyles(styles)(OverView);
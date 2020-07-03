import * as React from 'react';
import { Card, CardContent, Typography, Container, Button } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { YouTube } from '@material-ui/icons';

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
  }
});

interface prop extends WithStyles<typeof styles> { }


class OverView extends React.Component<prop> {
  render() {
    const openYoutube = () => {
      
    }

    return (
      <Container className={this.props.classes.top}>
        <Card className={this.props.classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="p">
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
              <Button>
                <YouTube fontSize="large" />
                <Typography component="p">
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
import * as React from 'react';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles, } from '@material-ui/core/styles/withStyles';
import {Container} from '@material-ui/core'
import Cavar from '../parts/podcastCard';

import radio from '../../images/podcast/radio.gif';
import radio2 from '../../images/podcast/radio2.gif';
import radio3 from '../../images/podcast/radio3.gif';
import radio4 from '../../images/podcast/radio4.gif';
import radio5 from '../../images/podcast/radio5.gif';
import radio6 from '../../images/podcast/radio6.gif';
import radio7 from '../../images/podcast/radio7.gif';

import are1 from '../../podcast/are1.mp3';
import are2 from '../../podcast/are2.mp3';
import are3 from '../../podcast/are3.mp3';
import are4 from '../../podcast/are4.mp3';
import are5 from '../../podcast/are5.mp3';
import are6 from '../../podcast/are6.mp3';
import are7 from '../../podcast/are7.mp3';

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
interface state { }

class Home extends React.Component<prop, state> {

  render() {
    return (
      <Container>
        <Cavar title="アレですね#1" image={radio} url={are1}/>
        <Cavar title="アレですね#2" image={radio2} url={are2}/>
        <Cavar title="アレですね#3" image={radio3} url={are3}/>
        <Cavar title="アレですね#4" image={radio4} url={are4}/>
        <Cavar title="アレですね#5" image={radio5} url={are5}/>
        <Cavar title="アレですね#6" image={radio6} url={are6}/>
        <Cavar title="アレですね#7" image={radio7} url={are7}/>
      </Container>
    )
  }
}

export default withStyles(styles)(Home);
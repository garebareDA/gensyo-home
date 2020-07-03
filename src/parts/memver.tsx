import * as React from 'react';
import { Container, } from '@material-ui/core';

import Avaters from './avater';
import garebare from '../../images/avater/garebare.jpg';
import kanzaki from '../../images/avater/midorin.png';
import kua from '../../images/avater/kua.png';
import dru from '../../images/avater/dru.png';
import tetra from '../../images/avater/tetra.png';
import guest from '../../images/avater/guest.png';
import rour from '../../images/avater/rour.jpg';

interface prop { }
interface state { }

class Member extends React.Component<prop, state> {
  render() {
    return (
      <Container>
          <Avaters name="ガレバレ" image={garebare} value="プログラム書いてる。" />
          <Avaters name="神裂(かんざき)" image={kanzaki} value="みどりんをすこれ" />
          <Avaters name="九蛙（くあ）" image={kua} value="シマエナガをすこれ" />
          <Avaters name="ディール" image={dru} value="一に警戒、二に素を出す、三に楽しむ！" />
          <Avaters name="TetoraP（てとら）" image={tetra} value="あぁ　テトラポット登ってぇええ" />
          <Avaters name="Linore（リノア)" image={guest} value="どらごんかもしれない" />
          <Avaters name="Libra（リブラ）" image={guest} value="GTAやってる" />
          <Avaters name="Rouru（ロウル）" image={rour} value="みんなのパパです" />
      </Container>
    )
  }
}

export default Member;
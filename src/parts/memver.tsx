import * as React from 'react';
import { Container, } from '@material-ui/core';

import Avaters from './avater';

interface prop { }
interface state { }

class Member extends React.Component<prop, state> {
  render() {
    return (
      <Container>
          <Avaters name="ガレバレ" image="../../images/avater/garebare.jpg" value="プログラム書いてる。" />
          <Avaters name="神裂(かんざき)" image="../../images/avater/midorin.png" value="みどりんをすこれ" />
          <Avaters name="九蛙（くあ）" image="../../images/avater/kua.png" value="シマエナガをすこれ" />
          <Avaters name="ディール" image="../../images/avater/dru.png" value="一に警戒、二に素を出す、三に楽しむ！" />
          <Avaters name="TetoraP（てとら）" image="../../images/avater/tetra.png" value="あぁ　テトラポット登ってぇええ" />
          <Avaters name="Linore（リノア)" image="../../images/avater/guest.png" value="どらごんかもしれない" />
          <Avaters name="Libra（リブラ）" image="../../images/avater/guest.png" value="GTAやってる" />
          <Avaters name="Rouru（ロウル）" image="../../images/avater/rour.jpg" value="みんなのパパです" />
      </Container>
    )
  }
}

export default Member;
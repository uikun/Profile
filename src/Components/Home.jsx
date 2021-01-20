import React from 'react';
import Kamon from '../assets/image/Kamon.png';
import NameCard from './NameCard'

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <NameCard
        img={Kamon}
        ruby={"shiura  yui"}
        name={"志村　勇伊"}
        nickname={"宇伊くん（uikun）"}
        />
      </div>
    )
  }
}
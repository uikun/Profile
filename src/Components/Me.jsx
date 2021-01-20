import React from 'react';
import "../assets/style/Me.css";
import "../assets/style/style.css";

export default class Me extends React.Component {
  render() {
    return(
      <div className="me-text">
        <h1>経歴</h1>
        <div className="me-contents">
          <div className="me-main">
            <ul>名前：志村　勇伊</ul>
            <ul>出身校：山梨学院大学　法学部</ul>
            <ul>生年月日：1997年2月23日</ul>
          </div>
          <div className="me-history">
            <ul>2019年3月 　山梨学院大学附属高等学校　卒業</ul>
            <ul>2019年4月 　山梨学院大学　入学</ul>
            <ul>2019年3月 　山梨学院大学　卒業　空手道　卒業</ul>
            <ul>2019年4月 　MEDcommunications株式会社　入社</ul>
            <ul>2020年10月　プログラミング学習開始</ul>
            <ul>2020年11月　NEXTAGE株式会社　退社</ul>
          </div>
        </div>
      </div>
    )
  }
}
import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/style/Contact.css";

export default class MenuButton extends React.Component {
  render() {
    return(
      <div className="menu-area">
        <Link to="/" className="menu-button">自己紹介</Link>
        <Link to="/Me" className="menu-button">経歴</Link>
        <Link to="/Work" className="menu-button">作品</Link>
        <Link to="/Contact" className="menu-button">交流</Link>
      </div>
    )
  }
}
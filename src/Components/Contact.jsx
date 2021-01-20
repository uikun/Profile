import React from 'react';
import Twitter from '../assets/image/Twitter.png';
import Facebook from '../assets/image/Facebook.png';
import GitHub from '../assets/image/GitHub.png';
import "../assets/style/Contact.css"

export default class Contact extends React.Component {
  render() {
    return(
      <div>
        <div>
          <h1>一期一会</h1>
          <h2>（Once in a while）</h2>
        </div>
        <div className="sns-contents">
          <p>FOLLOW ME!</p>
          <div className="sns-link">
            <a href="https://twitter.com/*******" target="_blank" rel = "noreferrer">
              <img src={Twitter} className="sns-button"  alt="twitter"/>
            </a>
            <a href="https://www.facebook.com/*******" target="_blank" rel = "noreferrer">
              <img src={Facebook} className="sns-button"  alt="facebook"/>
            </a>
            <a href="https://github.com/*****" target="_blank" rel = "noreferrer">
              <img src={GitHub} className="sns-button"  alt="github"/>
            </a>
          </div>
        </div>
        <div className="mail">
          <h1>＠メール</h1>
          <p>d*************@******.com</p>
        </div>
      </div>
    )
  }
}
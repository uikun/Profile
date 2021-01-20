import React from 'react';
import Card from './Card';
import QuizApp from '../assets/image/QuizApp.jpg';
import ChatBot from '../assets/image/chat-bot.jpg';
import CoordinateApp from '../assets/image/CoordinateApp.jpg';
import "../assets/style/Work.css";
import "../assets/style/style.css";

export default class Work extends React.Component {
  render() {
    return(
      <div>
        <h1>作品</h1>
        <div className="work-contents">
          <Card
          className="contents" 
          img={QuizApp}
          title={"QUIZ_APP"}
          lead={"初作品、HTML、CSS、JavaScript使用"}
          />
          <Card 
          className="contents"
          img={ChatBot}
          title={"CHAT-BOT"}
          lead={"REACT、FIREBASE、MATERRIAL-UIの練習"}
          link={"https://reactchatapplication-25f79.web.app/"}
          name={"チャットツール"}
          />
          <Card 
          className="contents"
          img={CoordinateApp}
          title={"CoordinateApp"}
          lead={"COMING SOON..."}
          />
        </div>
      </div>
    )
  }
}
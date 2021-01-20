import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import './assets/style/style.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="all-area">
        <Menu />
      </div>
    );
  }
}
import React from 'react'
import '../assets/style/NameCard.css';


export default class NameCard extends React.Component {
  render(){
    return(
      <div className="name-card">
        <img
          className="name-card-img"
          src={this.props.img}
          alt=""
        />
        <div className="name">
          <div className="ruby">
          {this.props.ruby}
          </div>
          <div className="my-name">
          {this.props.name}
          </div>
          <div className="nick-name">
          NICKNAME：{this.props.nickname}
          </div>
        </div>
      </div>
    )
  }
}
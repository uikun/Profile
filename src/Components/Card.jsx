import React from 'react'
import '../assets/style/Card.css'

export default class Card extends React.Component {
  render(){
    return(
      <div className="card">
        <img
          className="card__img"
          src={this.props.img}
          alt=""
        />
        <div className="card__content">
          <div className="card__title">
           {this.props.title}
          </div>
          <div className="card__lead">
            {this.props.lead}
          </div>
          <a href={this.props.link}　target="_blank" rel = "noreferrer">{this.props.name}</a>
        </div>
      </div>
    )
  }
}
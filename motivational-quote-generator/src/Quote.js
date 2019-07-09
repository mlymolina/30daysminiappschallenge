import React from 'react'

export default class Quote extends React.Component{
  render() {
    return (
      <div id='quote-frame'>
        <div id='phrase'>
          <i className="fas fa-quote-left"></i>
          <h4>{this.props.quote}</h4>
        </div>
        <p>- {this.props.author}</p>
        <div id='btn'> 
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="far fa-save"></i>
        </div>
      </div>
    )
  }
}
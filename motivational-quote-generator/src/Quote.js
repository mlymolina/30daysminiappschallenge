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
          <i className="far fa-save"></i>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.background}`}>
            <i className="fab fa-facebook"></i>
          </a>
          <a className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${this.props.quote}%20-${this.props.author}`}
            data-size="large">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    )
  }
}
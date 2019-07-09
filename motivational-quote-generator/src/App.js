import React from 'react';
import Quote from './Quote'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'This is a random text',
      author: 'Me',
      copyright: '2017-19 theysaidso.com',
      background: ''
    }
  }

  componentDidMount(){
    let url = 'http://quotes.rest/qod.json'
    this.findQuote(url)
  }

  findQuote(url) {
    fetch(url)
    .then(data => data.json())
    .then(result => this.updateState(result.contents.quotes[0]))
  }

  updateState(quote) {
    this.setState({
      quote: quote.quote,
      author: quote.author,
      background: quote.background
    })
  }

  render() {
    var quoteStyle = {
      backgroundImage: 'url(' + this.state.background + ')'
    }
    return (
      <div className="App" style={quoteStyle}>
        <Quote quote={this.state.quote} author={this.state.author} background={this.state.background}/>
        <footer>
          <i className="fa fa-copyright" aria-hidden="true"></i>
          <p>{this.state.copyright}</p>
        </footer>
      </div>
    )
  }
}


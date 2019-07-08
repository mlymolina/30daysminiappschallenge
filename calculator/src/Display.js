import React from 'react'

export default class Display extends React.Component {
  render(){
    return(
      <div id="result">
        <div id="history">
          <p id="history-value">{this.props.history.join('')}</p>
        </div>
        <div id="output">
          <p id="output-value">{this.props.result}</p>
        </div>
      </div>
    )
  }
}
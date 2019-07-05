import React from 'react'

export default class Display extends React.Component {
  render(){
    return(
      <div id="result">
        <div id="history"><p id="history-value"></p></div>
        <div id="output"><p id="output-value"></p></div>
      </div>
    )
  }
}
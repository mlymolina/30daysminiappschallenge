import React from 'react'
import './Transactions.css'

export default class Transaction extends React.Component {
  render(){
    return (
      <div id='transaction'>
        <span id='trans-description'>{this.props.description}</span>
        <span id='trans-amount'>{this.props.amount}</span>
      </div>
    )
  }
}
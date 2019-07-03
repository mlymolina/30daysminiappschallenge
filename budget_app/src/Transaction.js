import React from 'react'
import './Transactions.css'

export default class Transaction extends React.Component {
  render(){
    return (
      <tr id='transaction'>
        <td id='trans-description'>{this.props.description}</td>
        <td id='trans-amount'>{this.props.amount}</td>
      </tr>
    )
  }
}
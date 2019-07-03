import React from 'react'
import BudgetContext from './StateManagement/Context'
import Transaction from './Transaction'
import './Transactions.css'

export default class Transactions extends React.Component {
  render(){
    return (
      <BudgetContext.Consumer>
        {context => (
          <table id='transactions'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {context.transactions.map((transaction, i) => {
                return (
                  <Transaction
                    key={i} 
                    description={transaction.description}
                    amount={transaction.amount}
                  />
                )
              })}
            </tbody>
          </table>
        )}
      </BudgetContext.Consumer>
    )
  }
}
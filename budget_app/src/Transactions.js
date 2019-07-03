import React from 'react'
import BudgetContext from './StateManagement/Context'
import Transaction from './Transaction'
import './Transactions.css'

export default class Transactions extends React.Component {
  render(){
    return (
      <BudgetContext.Consumer>
        {context => (
          <div id='transactions'>
            {context.transactions.map((transaction, i) => {
              return (
                <Transaction
                  key={i} 
                  description={transaction.description}
                  amount={transaction.amount}
                />
              )
            })}
          </div>
        )}
      </BudgetContext.Consumer>
    )
  }
}
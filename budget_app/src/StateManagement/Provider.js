import React from 'react'
import BudgetContext from './Context'

export default class BudgetProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      transactions: [{description: 'house', amount: 123}]
    }
  }

  addTransaction(transaction) {
    let transactions = this.state.transactions.slice(0);
    transactions.push({description: transaction.description, amount: transaction.amount})
    this.setState({transactions: transactions})
    this.test()
  }

  render(){
    return(
      <BudgetContext.Provider
        value={{
          transactions: this.state.transactions,
          addTransaction: this.addTransaction.bind(this)
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    )
  }
}
import React from 'react'
import BudgetContext from './Context'

export default class BudgetProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      transactions: [{description: 'house', amount: 10}]
    }
  }

  isNumeric(number) {
    return !isNaN(parseFloat(number) && isFinite(number))
  }

  getFormattedNumber(){

  }

  getBudget() {
    let transactions = this.state.transactions
    const reducer = (accumulator, current) => current.amount > 0 ? accumulator + current.amount : accumulator
    return transactions.reduce(reducer, 0)
  }

  getExpenses() {
    let transactions = this.state.transactions
    const reducer = (accumulator, current) => current.amount < 0 ? accumulator + current.amount : accumulator
    return transactions.reduce(reducer, 0)
  }

  getBalance() {
    return this.getBudget() + this.getExpenses()
  }

  addTransaction(transaction, isExpense) {
    let transactions = this.state.transactions.slice(0)
    let amount = transaction.amount
    let description = transaction.description

    if (isExpense && this.isNumeric(transaction.amount)) {
      amount = -1 * parseFloat(amount)
      transactions.push({description: description, amount: amount})
    } else if (!isExpense && this.isNumeric(transaction.amount)) {
      amount = parseFloat(amount)
      transactions.push({description: description, amount: amount})
    } else {
      alert('Transaction is not valid, amount should be a number')
    }
    
    this.setState({transactions: transactions})
  }

  render(){
    return(
      <BudgetContext.Provider
        value={{
          transactions: this.state.transactions,
          addTransaction: this.addTransaction.bind(this),
          expenses: -1 * this.getExpenses(),
          budget: this.getBudget(),
          balance: this.getBalance()
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    )
  }
}
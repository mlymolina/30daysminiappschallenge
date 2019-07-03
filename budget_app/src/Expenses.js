import React from 'react'
import BudgetContext from './StateManagement/Context'
import './expenses.css'

export default class Expenses extends React.Component {
  constructor() {
    super()
    this.state = {
      description: '',
      amount: ''
    }
  }

  setDescription(e) {
    this.setState({ description: e.target.value })
  }

  setAmount(e) {
    this.setState({ amount: e.target.value })
  }

  render(){
    return(
    <BudgetContext.Consumer>
      {context => (
        <div id='expenses-form'>
          <div className='expenses-description input'>
            <input 
              type='text' 
              name='exp-description' 
              value={this.state.description} 
              id='exp-description' 
              placeholder='Insert expense description' 
              onChange={this.setDescription.bind(this)}>
            </input>
          </div>
          <div className='expenses-amount input'>
            <input 
              type='text' 
              name='exp-amount' 
              value={this.state.amount} 
              id='exp-amount' 
              placeholder='Insert amount: ex: 23.50' 
              onChange={this.setAmount.bind(this)}>
            </input>
          </div>
          <div className='btn input'>
            <input 
              type="submit" 
              value='Add Expense' 
              className='btn' 
              onClick={() => context.addTransaction(this.state, true)}/>
          </div>
        </div>
      )}
    </BudgetContext.Consumer>
    )
  }
}
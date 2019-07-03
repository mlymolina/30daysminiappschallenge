import React from 'react'
import BudgetContext from './StateManagement/Context'
import './Budget.css'

export default class Budget extends React.Component {
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
          <div id='budget-form'>
            <div className='budget-description input'>
              <input 
                type='text' 
                name='budget-description' 
                value={this.state.description} 
                id='budget-description' 
                placeholder='Insert budget description'
                onChange={this.setDescription.bind(this)}>
              </input>
            </div>
            <div className='budget-amount input'>
              <input 
                type='text' 
                name='budget-amount' 
                value={this.state.amount} 
                id='budget-amount' 
                placeholder='Insert amount: ex: 1000.00'
                onChange={this.setAmount.bind(this)}>
              </input>
            </div>
            <div className='btn input'>
              <input 
                type="submit" 
                value='Add Budget'
                className='btn'
                onClick={() => context.addTransaction(this.state, false)}/>
            </div>
          </div>
        )}
      </BudgetContext.Consumer>
    )
  }
}
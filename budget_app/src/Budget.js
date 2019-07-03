import React from 'react'
import BudgetContext from './StateManagement/Context'
import './Budget.css'

export default class Budget extends React.Component {

  render(){
    return(
      <BudgetContext.Consumer>
        {context => (
          <form action='' method=''id='budget-form'>
            <div className='budget-description input'>
              <input type='text' name='budget-description' id='budget-description' placeholder='Insert budget description'></input>
            </div>
            <div className='budget-amount input'>
              <input type='text' name='budget-amount' id='budget-amount' placeholder='Insert amount: ex: 1000.00'></input>
            </div>
            <div className='btn input'>
              <input type="submit" value='Add Budget' className='btn'/>
            </div>
          </form>
        )}
      </BudgetContext.Consumer>
    )
  }
}
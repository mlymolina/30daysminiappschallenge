import React from 'react'
import './expenses.css'

export default class Expenses extends React.Component {

  render(){
    return(
    <form action='' method=''id='expenses-form'>
      <div className='expenses-description input'>
        <input type='text' name='exp-description' id='exp-description' placeholder='Insert expense description'></input>
      </div>
      <div className='expenses-amount input'>
        <input type='text' name='exp-amount' id='exp-amount' placeholder='Insert amount: ex: 23.50'></input>
      </div>
      <div className='btn input'>
        <input type="submit" value='Add Expense' className='btn'/>
      </div>
    </form>
    )
  }
}
import React from 'react'
import BudgetContext from './StateManagement/Context'

export default class Overview extends React.Component {

  render() {
    return(
      <BudgetContext.Consumer>
        {context => (
          <div id='overview'>
            <div id='budget-overview' className='overview-item'>
              <p>BUDGET</p>
              <i className="fas fa-wallet"></i>
              <p className='balance'>${this.props.budget}</p>
            </div>
            <div id='expenses-overview' className='overview-item'>
              <p>EXPENSES</p>
              <i className="fas fa-credit-card"></i>
              <p className='balance'>${this.props.expenses}</p>
            </div> 
            <div id='balance-overview' className='overview-item'>
              <p>BALANCE</p>
              <i className="fas fa-money-bill"></i>
              <p className='balance'>${this.props.balance}</p>
            </div>  
          </div>
        )}
      </BudgetContext.Consumer>
    )
  }
}
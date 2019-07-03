import React from 'react';
import BudgetProvider from './StateManagement/Provider'
import BudgetContext from './StateManagement/Context'
import Overview from './Overview'
import Expenses from './Expenses'
import Budget from './Budget'
import Transactions from './Transactions'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: [],
      expenses: []
    }
  }

  render() {
    return (
      <BudgetProvider>
        <BudgetContext.Consumer>
          {context => (
            <div className="App">
              <nav><div className='container'>MY BUDGET APP</div></nav>
              <div className='container'>
                <Overview budget={context.budget} expenses={context.expenses} balance={context.balance}/>
                <Budget />
                <Expenses />
                <Transactions />
              </div>
            </div>
          )}
        </BudgetContext.Consumer>
      </BudgetProvider>
    )
  }
}


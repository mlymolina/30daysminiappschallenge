import React from 'react'
import BudgetContext from './Context'

export default class BudgetProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }
  componentDidMount() {

  }

  render(){
    return(
      <BudgetContext.Provider
        value={{
          transactions: this.state.transactions
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    )
  }
}
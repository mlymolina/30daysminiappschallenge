import React from 'react'
import CalculatorContext from './Context'

export default class CalculatorProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      result: '',
      history: ''
    }
  }

  render() {
    return(
      <CalculatorContext.Provider
        value={{

        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
} 

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

  onClick(event) {
    console.log(event.target.id)
  }

  render() {
    return(
      <CalculatorContext.Provider
        value={{
          onBtnClick: this.onClick
        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
} 

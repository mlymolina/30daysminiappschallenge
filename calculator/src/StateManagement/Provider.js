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
    console.log(event.target.value)
  }

  render() {
    return(
      <CalculatorContext.Provider
        value={{
          onBtnClick: this.onClick.bind(this)
        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
} 

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

  onClick(id) {
    let output = this.removeNumberFormat(this.getOutput())
    if (!isNaN(output) && !isNaN(id)) {
      output += id
      this.printOutput(output)
    } 
  }

  getHistory() {
    return this.state.history
  }

  printHistory(num) {
    this.setState({
      history: num
    })
  }

  getOutput() {
    return this.state.result
  }

  printOutput(num) {
    if(num ===  "") {
      this.setState({result: num})
    } else {
      this.setState({result: this.getFormattedNumber(num)})
    }
  }

  getFormattedNumber(num) {
    return Number(num).toLocaleString('en')
  }
  removeNumberFormat(num) {
    return Number(num.replace(/,/g, ''))
  }

  render() {
    return(
      <CalculatorContext.Provider
        value={{
          history: this.state.history,
          result: this.state.result,
          onBtnClick: this.onClick.bind(this)
        }}
      >
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
} 

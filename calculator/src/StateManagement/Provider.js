import React from 'react'
import CalculatorContext from './Context'

export default class CalculatorProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      result: '',
      history: []
    }
  }

  onClick(id) {
    let output = this.removeNumberFormat(this.getOutput())
    let history = this.state.history.slice(0);
    let hLength = history.length;
    if (!isNaN(output) && !isNaN(id)) {
      output += id
      this.printOutput(output)
    } else if (id === 'C') {
      this.clear()
    } else if (id  === 'CE') {
      this.backspace()
    } else if (id === '=') {
      this.calculate()
    } else if (isNaN(id) && this.state.result != '') {
      this.printHistory(this.state.result, id)
    } else if (isNaN(id) && isNaN(history[hLength - 1]) && this.state.result === '') {
      this.changeOperator(id)
    } 
  }

  getHistory() {
    return this.state.history
  }

  printHistory(num, operator) {
    let newHistory = this.state.history.slice(0);
    newHistory.push(num)
    newHistory.push(operator)
    this.printOutput("")
    this.setState({
      history: newHistory
    })
  }

  clear(){
    this.setState({
      result: '',
      history: []
    })
  }

  backspace(){
    let result = this.removeNumberFormat(this.state.result).toString();
    result = result.substring(0, result.length - 1)
    this.setState({
      result: this.getFormattedNumber(result)
    })
  }

  changeOperator(newOperator) {
    let history = this.state.history.slice(0)
    history[history.length - 1] = newOperator
    this.setState({
      history: history
    })
  }
  getOutput(){
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

  calculate() {
    let history = this.state.history.slice(0)
    let result = Number(this.removeNumberFormat(history[0]))
    let last = this.state.result !== "" ? history.length : history.length - 1
    for (let i = 1; i < last; i++) {
      let num = i === last-1 ? this.removeNumberFormat(this.state.result) : 
      Number(this.removeNumberFormat(history[i+1]))
      if (history[i] === '+') {
        result += num
      } else if (history[i] === '-') {
        result -= num
      } else if (history[i] === '%') {
        result = result % num
      } else if (history[i] === '/') {
        result = result / num
      } else if (history[i] === '*') {
        result = result * num
      }
    }
    
    this.setState({
      history: [],
      result: this.getFormattedNumber(result)
    })
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

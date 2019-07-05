import React from 'react'
import CalculatorContext from './StateManagement/Context'
 
export default class Keyboard extends React.Component {
  render() {
    return (
      <CalculatorContext.Consumer>
        {context => (
          <div id="keyboard">
            <button className="operator" id="clear" onClick={context.onBtnClick.bind(this)}>C</button>
            <button className="operator" id="backspace" onClick={context.onBtnClick.bind(this)}>CE</button>
            <button className="operator" id="%" onClick={context.onBtnClick.bind(this)}>%</button>
            <button className="operator" id="/" onClick={context.onBtnClick.bind(this)}>&#247;</button>
            <button className="number" id="7" onClick={context.onBtnClick.bind(this)}>7</button>
            <button className="number" id="8" onClick={context.onBtnClick.bind(this)}>8</button>
            <button className="number" id="9" onClick={context.onBtnClick.bind(this)}>9</button>
            <button className="operator" id="*" onClick={context.onBtnClick.bind(this)}>&times;</button>
            <button className="number" id="4" onClick={context.onBtnClick.bind(this)}>4</button>
            <button className="number" id="5" onClick={context.onBtnClick.bind(this)}>5</button>
            <button className="number" id="6" onClick={context.onBtnClick.bind(this)}>6</button>
            <button className="operator" id="-" onClick={context.onBtnClick.bind(this)}>-</button>
            <button className="number" id="1" onClick={context.onBtnClick.bind(this)}>1</button>
            <button className="number" id="2" onClick={context.onBtnClick.bind(this)}>2</button>
            <button className="number" id="3" onClick={context.onBtnClick.bind(this)}>3</button>
            <button className="operator" id="+" onClick={context.onBtnClick.bind(this)}>+</button>
            <button className="empty" id="empty" onClick={context.onBtnClick.bind(this)}></button>
            <button className="number" id="0" onClick={context.onBtnClick.bind(this)}>0</button>
            <button className="empty" id="empty" onClick={context.onBtnClick.bind(this)}></button>
            <button className="operator" id="=" onClick={context.onBtnClick.bind(this)}>=</button>
          </div>
        )}
      </CalculatorContext.Consumer>
    )
  }
}
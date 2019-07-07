import React from 'react'
import CalculatorProvider from './StateManagement/Provider'
import CalculatorContext from './StateManagement/Context'
import Display from './Display'
import Keyboard from  './Keyboard'
import './App.css'

function App() {
  return (
    <CalculatorProvider>
      <CalculatorContext.Consumer>
        {context => (
          <div id="container">
            <div id="calculator">
              <Display history={context.history} result={context.result}/>
              <Keyboard />
            </div>
          </div>
        )}
      </CalculatorContext.Consumer>
    </CalculatorProvider>
  )
}

export default App

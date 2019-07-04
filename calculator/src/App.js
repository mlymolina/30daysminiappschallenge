import React from 'react'
import Display from './Display'
import Keyboard from  './Keyboard'
import './App.css'

function App() {
  return (
    <div id="container">
      <div id="calculator">
        <Display />
        <Keyboard />
      </div>
    </div>
  )
}

export default App

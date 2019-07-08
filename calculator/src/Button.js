import React from 'react'
import CalculatorContext from './StateManagement/Context'

export const Button = (props) => {
  const { className, id } = props.type
  return (
    <CalculatorContext.Consumer>
      {context => (
        <button className={className}
          onClick={() => context.onBtnClick(id, props.type)}>
          {id}
        </button>
      )}
    </CalculatorContext.Consumer>
  )
}

export const ButtonTypes = {
  clear: { id: 'C', className: 'operator' },
  backspace: { id: 'CE', className: 'operator' },
  pct: { id: '%', className: 'operator' },
  division: { id: '/', className: 'operator' },
  multiply: {id: '*', className:'operator'},
  plus: {id: '+', className:'operator'},
  minus: {id: '-', className:'operator'},
  empty: {id: '', className:'empty'},
  equals: {id: '=', className:'operator'},
  '0': {id: '0', className:'number'},
  '1': {id: '1', className:'number'},
  '2': {id: '2', className:'number'},
  '3': {id: '3', className:'number'},
  '5': {id: '5', className:'number'},
  '4': {id: '4', className:'number'},
  '6': {id: '6', className:'number'},
  '7': {id: '7', className:'number'},
  '8': {id: '8', className:'number'},
  '9': {id: '9', className:'number'},
}
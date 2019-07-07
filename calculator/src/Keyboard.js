import React from 'react'
import { Button, ButtonTypes } from './Button'
import CalculatorContext from './StateManagement/Context'
 
export default class Keyboard extends React.Component {
  render() {
    return (
      // TODO: Do we need the context anymore?
      <CalculatorContext.Consumer>
        {context => (
          <div id="keyboard">
            <Button type={ButtonTypes.clear} />
            <Button type={ButtonTypes.backspace} />
            <Button type={ButtonTypes.pct} />
            <Button type={ButtonTypes.division} />
            <Button type={ButtonTypes['7']} />
            <Button type={ButtonTypes['8']} />
            <Button type={ButtonTypes['9']} />
            <Button type={ButtonTypes.multiply} />
            <Button type={ButtonTypes['4']} />
            <Button type={ButtonTypes['5']} />
            <Button type={ButtonTypes['6']} />
            <Button type={ButtonTypes.minus} />
            <Button type={ButtonTypes['1']} />
            <Button type={ButtonTypes['2']} />
            <Button type={ButtonTypes['3']} />
            <Button type={ButtonTypes.plus} />
            <Button type={ButtonTypes.empty} />
            <Button type={ButtonTypes['0']} />
            <Button type={ButtonTypes.empty} />
            <Button type={ButtonTypes.equals} />
          </div>
        )}
      </CalculatorContext.Consumer>
    )
  }
}
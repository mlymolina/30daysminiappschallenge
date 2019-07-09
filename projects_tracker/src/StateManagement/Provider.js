import React from 'react'
import TrackerContext from './Context'

export default class TrackerProvider {
  constructor(){
    this.state = {
      goals: []
    }
  }

  render() {
    return (
      <TrackerContext.Consumer
      value={{
        goals: this.state.goals
      }}>
        {this.props.children}
      </TrackerContext.Consumer>
    )
  }

}

import React from 'react'
import TrackerContext from './StateManagement/Context'

export default class Filler extends React.Component{
  render() {
    return (
      <TrackerContext.Consumer>
        {context => (
          <div className='filler' style={{"width" : this.props.percentage + "%"}}> 

          </div>
        )}
      </TrackerContext.Consumer>
    )
  }
}
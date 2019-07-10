import React from 'react'
import Filler from './Filler'

export default class ProgressBar extends React.Component{
  render() {
    return (
      <div className='progress-bar'> 
        <Filler percentage={this.props.percentage}/>
      </div>
    )
  }
}
import React from 'react'
import TrackerContext from './Context'

export default class TrackerProvider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [
        {
          name: 'Weather App',
          deadline: '12-12-19',
          completion: 90
        },
        {
          name: 'Budget App',
          deadline: '12-12-19',
          completion: 100
        },
        {
          name: 'Calculator App',
          deadline: '12-12-19',
          completion: 100
        },
        {
          name: 'Projects Tracker App',
          deadline: '12-12-19',
          completion: 10
        }
      ]
    }
  }

  render() {
    return (
      <TrackerContext.Provider
        value={{
          projects: this.state.projects,
          percentage: this.state.projects[0].completion
        }}>
        {this.props.children}
      </TrackerContext.Provider>
    )
  }

}

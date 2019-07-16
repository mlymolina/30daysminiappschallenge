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
      ],
      formVisible: false
    }
  }

  toggleModal() {
    if (this.state.formVisible) {
      this.setState({formVisible: false})
    } else {
      this.setState({formVisible: true})
    } 
  }

  addProject(project) {
    console.log('hola')
    console.log(project)
  }

  render() {
    return (
      <TrackerContext.Provider
        value={{
          projects: this.state.projects,
          formVisible: this.state.formVisible,
          toggleModal: this.toggleModal.bind(this),
          addProject: this.addProject.bind(this)
        }}>
        {this.props.children}
      </TrackerContext.Provider>
    )
  }

}

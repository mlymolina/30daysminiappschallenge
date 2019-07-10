import TrackerContext from './StateManagement/Context'
import  React from 'react'
import ProgressBar from './ProgressBar'

export default class Project extends React.Component {
  render() {
    return (
      <TrackerContext.Consumer>
        {context => (
          <div className='project'>
            <div className='project-info'>
              <p className='project-name'>
                {this.props.project.name}
              </p>
              <p className='deadline'>
                Deadline: {this.props.project.deadline}
              </p>
            </div>
            <ProgressBar percentage={this.props.project.completion}/>
          </div>
        )}
      </TrackerContext.Consumer>
    )
  }
}
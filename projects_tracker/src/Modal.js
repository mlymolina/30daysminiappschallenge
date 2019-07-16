import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className="trigger" onClick={this.props.toggle}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <div className={this.props.visible ? "modal show-modal": "modal"}>
          <div className="modal-content">
              <span className="close-button" onClick={this.props.toggle}>&times;</span>
              <div className='project-input'>
                <label htmlFor="name">Project Name: </label>
                <input type="text" name="name" id="name" required/>
              </div>
              <div className='project-input'>
                <label htmlFor="deadline">Deadline: </label>
                <input type="date" name="deadline" id="deadline" required/>
              </div>
              <div className="project-input">
                <input type="submit" value="Save" onClick={this.props.addProject}/>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
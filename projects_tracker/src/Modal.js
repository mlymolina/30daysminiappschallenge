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
              <h1>Hello, I am a modal!</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
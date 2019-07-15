import React from 'react'
import Project from './Project'
import Modal from './Modal'
import TrackerContext from './StateManagement/Context'
import TrackerProvider from './StateManagement/Provider'
import './App.css'

function App() {
  return (
    <TrackerProvider>
      <TrackerContext.Consumer>
        {context => (
          <div className="App">
            <div className='navbar'>
              <p>My Projects Tracker</p>
            </div>
            <div className='container'>
              <Modal visible={context.formVisible} toggle={context.toggleModal}/>
              {context.projects.map((project, i) => {
                return (
                  <Project key={i} project={project}/>  
                )
              })}
            </div>
          </div>
        )}
      </TrackerContext.Consumer>
    </TrackerProvider>
  )
}

export default App

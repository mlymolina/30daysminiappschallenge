import React from 'react'
import Project from './Project'
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
              <a href="https://www.w3schools.com">
                <i className="fas fa-plus-circle"></i>
              </a>
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

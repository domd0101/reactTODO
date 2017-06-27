import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Projects  from './Components/Projects'
import AddProject from './Components/AddProject'


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects:[
      {
        id : uuid.v4(),
        title: 'Bussiness Website',
        category: 'Web Design'
      },
      {
        id : uuid.v4(),
        title: 'Social App',
        category: 'Mobile Dev'
      },
      {
        id : uuid.v4(),
        title: 'Shopping Cart',
        category: 'Web Dev'
      }
    ]})
  }

  getNewProject(project){
    let projects = this.state.projects;
    projects.push(project)
    this.setState({project:projects})
  }

  handleDelete(id){
    let projects = this.state.projects;
    let foundProject = projects.findIndex( pro=> pro.id === id )
    projects.splice(foundProject,1)
    this.setState(projects:projects)
  }

  render() {

    return (
      <div className="App">
        <AddProject getNewProject={this.getNewProject.bind(this)} />
        <Projects onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

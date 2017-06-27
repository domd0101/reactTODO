import React ,{ Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  deleteItem(id){
    this.props.onDelete(id)
  }

  render(){
    let eachProject = this.props.projects.map( projs =>{
      return(
        <ProjectItem onDelete={this.deleteItem.bind(this)} key={projs.title} projects={projs}/>
      )
    })
    return(
      <div>
        Projects
        {eachProject}
      </div>
    )
  }

}

export default Projects;

import React ,{ Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super()
    this.state ={
      newProject: {}
    }
  }

  static defaultProps ={
    categoryOpt:['Web Design','Mobile Dev','Web Dev']
  }

  getValues(e){
    if(this.refs.title.value===''){
      alert('Title is required')
    }
    else{
      this.setState({newProject:{
        id : uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, () => {
        this.props.getNewProject(this.state.newProject)
      })
    }
    e.preventDefault();
  }

  render(){
    let categoryOpt = this.props.categoryOpt.map(cat=>{
      return(
        <option key={cat} value={cat}>{cat}</option>
      )
    })

    return(
      <div>
        <h1>Add Project</h1>
        <form onSubmit={ this.getValues.bind(this) }>
          <div>
            <label>Title</label><br/>
            <input type='text' ref='title'/>
          </div>
          <div>
            <label>Category</label><br/>
            <select ref='category'>
              { categoryOpt }
            </select>
          </div>
          <input type='submit' value='SUBMIT'/>
        </form>
      </div>
    )
  }

}

export default AddProject;

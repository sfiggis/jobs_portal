import React, { Component } from 'react';
import Project from '../models/project';
import 'whatwg-fetch';

class ShowProject extends Component {
  render() {
    if (this.props.project !== undefined) {
      return (
        <div key={ "project" + this.id }>
          <img id="profile-img" alt="profile" src={ this.props.project.imgUrl }/>
          <div id="project-info" onDoubleClick={ this.props.parent.edit }>
            <h2>
              { this.props.project.name }
            </h2> 
            <a href={ this.props.project.link} ><h3>
              { this.props.project.link }
            </h3></a>
            <p>
              { this.props.project.description }
            </p> 
          </div>
        </div>
      );  
    } else {
      return <div>loading...</div>
    };
  };
};

class EditProject extends Component {
  render() {
    if (this.props.project !== undefined) {
      return (
        <div onDoubleClick={ this.props.parent.show } key={ "project" + this.id }>
          <fieldset>
            <input id="name" className="edit-field" defaultValue={ this.props.parent.state.currentProject.name } onBlur={ this.props.parent.handleChange }/>
          </fieldset>
          <fieldset>
            <input id="link" className="edit-field" defaultValue={ this.props.parent.state.currentProject.link } onBlur={ this.props.parent.handleChange }/>
         </fieldset> 
         <fieldset>
            <input id="description" className="edit-field" defaultValue={ this.props.parent.state.currentProject.description } onBlur={ this.props.parent.handleChange }/>
         </fieldset> 
        </div> 
      );
    } else {
      return <div>loading...</div>
    }
  };
};

class ProjectView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProject: {},
      view: <ShowProject project={ this.props.project } parent={ this } />
    };

    this.show = this.show.bind(this);
    this.edit = this.edit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  render() {
    return <div className="project-view">
    { this.state.view }
      </div>
  };
  handleChange(event) {
    var object = { [event.target.id]: event.target.value };
     this.state.currentProject.update(object);
  };

    show() {
        this.setState( {
      view: <ShowProject project={ this.state.currentProject } parent={ this } />
    });
  };

  edit() {
    this.setState( {
      view: <EditProject project={ this.state.currentProject } parent={ this } />
    });
  };
};


export default ProjectView;
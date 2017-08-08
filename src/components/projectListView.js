import React, { Component } from 'react';
import ProjectView from  './projectView';
import Project from '../models/project';
import 'whatwg-fetch';

class ProjectListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectList: []
    };
  };

  render() {
    var project;
    var user = this.props.user
    const listItems = this.state.projectList.map((project) =>
      <li className="project" key={ project.id }>
        <ProjectView project={ project } user={ user } />
      </li>
    );
    return(
      <div className="project-list-view">
        <h2>Recent Project Work</h2>
          <ul className="project-listings">
            { listItems }
          </ul>
      </div>
    )
  };

  componentDidMount() {
    var view = this;
    var projectList = view.state.projectList;
    var projectProperties = {};
    fetch("http://localhost:4000/projects" + "?user_id=" + this.props.user.id, {
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:4000'
      }
    }).then((body) => {
      return body.json();
      }).then(function(parsedData) {
        if (parsedData.length > 0) {
          parsedData.forEach(function(project) {
            Object.keys(project).map(function(data) {
              projectProperties[snakeToCamel(data)] = project[data];
            });
            project = new Project(projectProperties);
            projectList.push(project)
          });
          view.setState({
            projectList: projectList
          });
        };
      });
    };
};
function snakeToCamel(s){
    return s.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
}

export default ProjectListView;
import React, { Component } from 'react';
import ProjectView from  './projectView';
import 'whatwg-fetch';

class ProjectListView extends Component {
  render() {
    var project;
    var user = this.props.user
    return(
      <div className="project-list-view">
        <h2>Recent Project Work</h2>
          <ul className="project-listings">
            <li className="project">
              <ProjectView project={ project } user={ user }/>
            </li>
          </ul>
      </div>
    )
  };
};

export default ProjectListView;
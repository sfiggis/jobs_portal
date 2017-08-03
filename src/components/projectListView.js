import React, { Component } from 'react';
import ProjectView from  './projectView';
import Project from '../models/project';

class ProjectListView extends Component {
  render() {
    var project = new Project({
      name: 'Gravy Train',
      link: 'https://github.com/sfiggis/GravyTrain',
      description: 'website for selecting and providing courses',
      imgUrl: 'https://img1.wsimg.com/Sitecore/3/9/website-builder-business-plus-plans-illu-02-v02.png'
      });
    return(
      <div className="project-list-view">
        <h2>Recent Project Work</h2>
          <ul className="project-listings">
            <li className="project">
              <ProjectView project={ project }/>
            </li>
          </ul>
      </div>
    )
  };
};

export default ProjectListView;
import React, { Component } from 'react';

class ProjectView extends Component {

  constructor(props) {
  super(props);

  };
  render() {
    return (
    <div className="project-view">
    <img id="project-img" alt="project" src={ this.props.project.imgUrl }/>
      <div id="project-info">
        <h3>
          { this.props.project.name }
        </h3>
        <a href={ this.props.project.link }>{ this.props.project.link }</a>
        <p>
          { this.props.project.description }
        </p>
      </div>
    </div>
    );
  };

};


export default ProjectView;
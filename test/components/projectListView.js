import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Project from '../../src/models/project';
import ProjectView from '../../src/components/projectView';
import ProjectListView from '../../src/components/projectListView';

describe("ProjectListView component", function() {

  var component = shallow(<ProjectListView />);

  it("creates a div with a class name of project-list-view", function() {
    expect(component.find("div").hasClass("project-list-view")).to.eq(true);
  });

  it("creates a project list", function() {
    expect(component.find("ul").hasClass("project-listings"))
  })

  it("shows a list of projects", function() {
    const projects = component.find("li.project");
    expect(projects.first().html()).contains('Gravy Train');
  })
});
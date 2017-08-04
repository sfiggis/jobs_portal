import React from 'react';
import { expect } from 'chai';
import { mount, render } from 'enzyme';
import Project from '../../src/models/project';

import ProjectView from '../../src/components/projectView';

describe("ProjectView component", function() {
  var component;
  var project;

  describe("render", function() {
    beforeEach(function() {
      project = new Project({
        name: 'Gravy Train',
        link: 'https://github.com/sfiggis/GravyTrain',
        description: 'website for selecting and providing courses'
      });
      component = render(<ProjectView project={ project } />);
    });

    it("creates a div with a class name of project-view", function() {
      var component = render(<ProjectView project={ project } />);
      expect(component.find("div").length).to.eq(2);
      expect(component.find("div").hasClass("project-view")).to.eq(true);
    });

    it("displays a project's name in a heading", function() {
      expect(component.find("h3").first().text()).to.eq("Gravy Train");
    });
    it("displays a project's url as a link", function() {
      expect(component.find("a")[0].attribs.href).to.eq('https://github.com/sfiggis/GravyTrain');
    });
    it("displays a project's description as a paragraph", function() {
      expect(component.find("p").first().text()).to.eq('website for selecting and providing courses');
    });
  });
});
import { expect } from 'chai';
import Project from '../../src/models/project';

describe('Project', function() {

  var project;

  beforeEach(function() {
    project = new Project({
      name: 'Gravy Train',
      link: 'https://github.com/sfiggis/GravyTrain',
      description: 'website for selecting and providing courses'
    });
  });

  it('provides the name', function() {
    expect(project.name).to.eq('Gravy Train');
  });

  it('provides the link', function() {
    expect(project.link).to.eq('https://github.com/sfiggis/GravyTrain');
  });

  it('provides the description', function() {
    expect(project.description).to.eq('website for selecting and providing courses');
  });
});
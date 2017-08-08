import { expect } from 'chai';
import Project from '../../src/models/project';
import User from '../../src/models/user';

describe('Project', function() {

  var project;
  var user;

  beforeEach(function() {
    user = new User({
      id: 1,
      firstName: 'Sophie',
      lastName: 'Figgis',
      jobTitle: 'Full Stack Developer',
      location: 'Windsor, UK',
      tagline: 'javascript... hmm...',
      imgUrl: 'http://cdn.viralscape.com/wp-content/uploads/2014/09/Computer-Cat.jpg'
    });

    project = new Project({
      id: 1,
      name: 'Gravy Train',
      link: 'https://github.com/sfiggis/GravyTrain',
      description: 'website for selecting and providing courses',
      userId: user.id
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
   it ('displays updated info after editing', function() {
    project.update({ name: "Cool react stuff", description: "Whoa. this is just so cool." });
    expect(project.name).to.eq("Cool react stuff");
    expect(project.description).to.eq("Whoa. this is just so cool.");
  });

   describe("save", function() {
    beforeEach(function() {
      project.save();
    });

    it("generates an id", function() {
      expect(project.id).to.not.be.undefined;
      expect(typeof(project.id)).to.eq('number');
    });

  });
});